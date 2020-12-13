import { splitText } from '../helpers/TextUtils'

test('splitText', () => {
    expect(splitText(
        '@#@@iIFLKuTfAEnBp?TwwoGmoEKXTwBXHkJO/ztuHgUkrdgtDiAKKj^^D@SGXCVgOinrfx@rXazZWzqBVm.yNGSBGGjxrVykOOWMQEZbKSjGBFKywfWgWkLjHS"B'))
        .toEqual(['iIFLKuTfAEnBp', 'TwwoGmoEKXTwBXHkJO', 'ztuHgUkrdgtDiAKKj', 'D', 'SGXCVgOinrfx', 'rXazZWzqBVm', 'yNGSBGGjxrVykOOWMQEZbKSjGBFKywfWgWkLjHS', 'B'])

    expect(splitText(
        ' ! ELee.rDhCjFxJPTNgzE+qdNTgdl=AYlKkFyvPsMHeMmr<bhEN>BrzIdaVgHLHjFmKwsp?! PPDsTpycAmKFqQ yMlpvlpkI~hGpyItVxs`KqNInAzDJmNxdJCg...!!?!?abc!!..#&$%'))
        .toEqual(['ELee', 'rDhCjFxJPTNgzE', 'qdNTgdl', 'AYlKkFyvPsMHeMmr', 'bhEN', 'BrzIdaVgHLHjFmKwsp', 'PPDsTpycAmKFqQ', 'yMlpvlpkI', 'hGpyItVxs', 'KqNInAzDJmNxdJCg', 'abc'])
})
