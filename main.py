import argparse
import os
import json

games = ['Brawlhalla', 'Multiversus', 'SmashBros']


def calculate_elo_rating(player1_rating, player2_rating, result):
    """
    Calculate updated Elo ratings for two players after a game.

    Args:
        player1_rating (int): The current rating of Player 1.
        player2_rating (int): The current rating of Player 2.
        result (float): The result of the game - 1.0 for a win, 0.5 for a draw, 0.0 for a loss.

    Returns:
        new_player1_rating (int): The updated rating of Player 1.
        new_player2_rating (int): The updated rating of Player 2.
    """
    K = 16

    expected_player1 = 1 / (1 + 10 ** ((player2_rating - player1_rating) / 400))
    expected_player2 = 1 / (1 + 10 ** ((player1_rating - player2_rating) / 400))

    new_player1_rating = player1_rating + K * (result - expected_player1)
    new_player2_rating = player2_rating + K * ((1 - result) - expected_player2)

    return int(new_player1_rating), int(new_player2_rating)


def add_player_data(name, pseudo, elo, win, loss, data):
    pos = len(data)
    for i in range(len(data)):
        if data[i]['elo'] == elo:
            if data[i]['win'] + data[i]['loss'] < win + loss:
                pos = i
                break
            else:
                continue
        if data[i]['elo'] < elo:
            pos = i
            break
    data = data[:pos] + [{
        'rank': pos + 1,
        'name': name,
        'pseudo': pseudo,
        'elo': elo,
        'win': win,
        'loss': loss
    }] + data[pos:]
    for i in range(pos + 1, len(data)):
        data[i]['rank'] = i + 1
    return data


def add_player(name, pseudo, game):
    if name is None or pseudo is None or game is None:
        print('Missing arguments')
        return
    if game not in games:
        print('Unknown game')
        return

    elo = 1000
    data = []
    if os.path.exists(os.path.join('src', 'constants', f'{game}.json')):
        with open(os.path.join('src', 'constants', f'{game}.json'), 'r') as f:
            data = json.load(f)
    for player in data:
        if player['name'] == name:
            print('Player already exists')
            return
        if player['pseudo'] == pseudo:
            print('Pseudo already exists')
            return
    data = add_player_data(name, pseudo, elo, 0, 0, data)
    with open(os.path.join('src', 'constants', f'{game}.json'), 'w') as f:
        json.dump(data, f)


def match(player1, player2, game, result):
    if player1 is None or player2 is None or game is None or result is None:
        print('Missing arguments')
        return
    if game not in games:
        print('Unknown game')
        return
    if result not in ['win', 'loss']:
        print('Unknown result')
        return

    data = []
    if os.path.exists(os.path.join('src', 'constants', f'{game}.json')):
        with open(os.path.join('src', 'constants', f'{game}.json'), 'r') as f:
            data = json.load(f)
    player1_data = None
    player2_data = None
    for player in data:
        if player['pseudo'] == player1:
            player1_data = player
        if player['pseudo'] == player2:
            player2_data = player
    if player1_data is None:
        print('Player 1 does not exist')
        return
    if player2_data is None:
        print('Player 2 does not exist')
        return
    if player1_data['pseudo'] == player2_data['pseudo']:
        print('Players are the same')
        return
    if result == 'win':
        player1_data['win'] += 1
        player2_data['loss'] += 1
    elif result == 'loss':
        player1_data['loss'] += 1
        player2_data['win'] += 1
    player1_data['elo'], player2_data['elo'] = calculate_elo_rating(player1_data['elo'], player2_data['elo'],
                                                                    1 if result == 'win' else 0)
    data = [player1_data, player2_data]
    with open(os.path.join('src', 'constants', f'{game}.json'), 'w') as f:
        json.dump(data, f)


"""
def main():
    parser = argparse.ArgumentParser(description='Manage players in json for a classement.')
    parser.add_argument('type', type=str, help='Type the operation (add or match).')
    parser.add_argument('--name', nargs='?', type=str, help='Name of the player.')
    parser.add_argument('--pseudo', nargs='?', type=str, help='Pseudo of the player.')
    parser.add_argument('--game', nargs='?', type=str, help='Name of the game.')
    parser.add_argument('--player1', nargs='?', type=str, help='Name of the player 1.')
    parser.add_argument('--player2', nargs='?', type=str, help='Name of the player 2.')
    parser.add_argument('--result', nargs='?', type=str, help='Result of the game.')
    args = parser.parse_args()
    if args.type == 'add':
        add_player(args.name, args.pseudo, args.game)
    elif args.type == 'match':
        print('Match')
    else:
        print('Unknown operation')
        return
main()
 """



print(calculate_elo_rating(1000, 1000, 1))

