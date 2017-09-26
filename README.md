# Bit Address

Open source command-line bitcoin wallet generator, inspired by [bitaddress.org](bitaddress.org)

## Installation

```bash
$ npm install -g bitaddress
```

## Features

  * Single wallet
  * Brain wallet
  * Bulk wallet
  * Detail wallet (todo)
  * Generate PDF file automatically
  * Generate QRCode in terminal
  * Quick find address prefix and suffix
  * All generated addresses are compressed

## Example

### Single wallet

**Generate a new random bitcoin address**

```bash
$ bitaddress singlewallet
Bitcoin Address: 1MrkWMnWLW53SQVQ5Pd2BsugY1F8H1oKio
Private Key:     L1Dxj6ekEGJ28TS6QkhLYf3a7QTgwHcTwxU6psM5Aw8fD6x3hKKh
```

**Options**
```bash
$ bitaddress singlewallet -h

  Usage: singlewallet [options]

  Options:

    -o, --output <path>  Specify file to write report to
    -q, --qrcode         Print qrcode in the console
    -h, --help           output usage information

```

### Brain wallet
**Generate a new bitcoin address from a passphrase**

```bash
$ bitaddress brainwallet 1234567890abcde
  Bitcoin Address: 1Fk73xfCxQBRf7ZvMpxA7Z8yY2D9emgQEn
  Private Key:     L44Dtfxg9CS2A9viE53m2CN6sCuCtifyg4QzzQQwarjUT1erKxLe
```

**Options** 
```bash
$ bitaddress brainwallet -h

  Usage: brainwallet [options]

  Options:

    -o, --output <path>  Specify file to write report to
    -q, --qrcode         Print qrcode in terminal
    -h, --help           output usage information
```

### Bulk wallet
  
**Generate some new bitcoin addresses**
  
```bash
$ bitaddress bulkwallet 10
1: "16mQ3MNP9NHuPEfw7CKoSXSS4Nz7qF8RxG", "KxRt6DVV9sZT3DYLNA2RWRHyngfHA3Gxb7JKunFvkmrCqURkKrHK"
2: "1Bgr9niuY2hc8nCubpjBSHUzmAa1rYRkHk", "L3XPntXetNHLwWnHxEUiPGHkR2NaeeFAonHTmsTzQ7SbA1L1VamB"
3: "1L258vYBcET9YwSz3bopzDXMf5ma335yaw", "L37WE1c8Fxza9vFpu8dEkE2bGoHdURUMMS75nTPCtoRfEs11S6wZ"
4: "1PwdCaCQhjkTq68ttrHH3uZUk1rR1C1bUB", "L5nxcnsAsw8aegmTvcebjEKnH2G385EqxSgrERLMvCvvZLAhvotS"
5: "18q3sbEoGjmK2wZ9zbBQFPaLRso65s9eB6", "L4DqiQwvhayG299c11s2WCgxsHDHAYpZTqch7seJ7o3T7D4Jzoqh"
6: "1HEDKHWf9VJF32yzEggBkjQFEPnXnyV2Me", "L1ssxKJVQBHH2hsvw9ghFdmQrKXXd9rtuYxsSJeFHUHsiNWQZijG"
7: "1Hzb43sWRBrh7PVkaWoHMnQWnJSxZTygM6", "KyFhaTz5LqtyWh68f8LCSQayo1xpGcdEfSdzBQ16SzbCMrrMSS7B"
8: "17Y2hixLYGJvpGJmhwgu2y4ZdoghDpReUf", "KyxhYAmJ3ap81REujqTfbnjW57a7LNgaSZLYJEZ35UGHQi2TkK11"
9: "1KJ4mjoXeso3Kf1sWvawNTWHdNWriTH3en", "KzkcBd8JKshAeTqPXJ2q8MhxetjN69vgqkMt2L7B6AYXPZzyogHX"
10: "19Lps6FkZfAw77uZzdpVTyPL7j9MRcwAg2", "KzNiPD78YB6NkHAJHNRPXQUaPPF4zhUDgBzMkVDSgiovfbgeZayF"
```

**Options**
```bash
bitaddress bulkwallet -h

  Usage: bulkwallet [options]

  Options:

    -o, --output <path>       Specify file to write report to
    -s, --startwith <string>  Find address startwith you want
    -e, --endwith <string>    Find address endwith you want
    -h, --help                output usage information
```


## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

  [MIT](LICENSE)



