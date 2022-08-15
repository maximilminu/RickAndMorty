# Rick and Morty Challenge

## Instalacion

instalar con NPM o YARN

```bash
npm install
```
### Usa la API de Rick and Morty para probar tus habilidades 🥼

Tienes que consultar todos los `character`, `locations` y `episodes` de [https://rickandmortyapi.com/](https://rickandmortyapi.com/) e indicar:

1. Char counter:
    - cuántas veces aparece la letra **"l"** (case insensitive) en los nombres de todos los `location`
    - cuántas veces aparece la letra **"e"** (case insensitive) en los nombres de todos los `episode`
    - cuántas veces aparece la letra **"c"** (case insensitive) en los nombres de todos los `character`
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)
2. Episode locations:
    - para cada `episode`, indicar la cantidad y un listado con las `location` (`origin`) de todos los `character` que aparecieron en ese `episode` (sin repetir)
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)
- Output en formato `json` con esta estructura

[
    {
        "exercise_name": "Char counter",
        "time": "2s 545.573272ms",
        "in_time": true,
        "results": [
            {
                "char": "l",
                "count": 12345,
                "resource": "location"
            },
            {
                "char": "e",
                "count": 12345,
                "resource": "episode"
            },
            {
                "char": "c",
                "count": 12345,
                "resource": "character"
            }
        ]
    },
    {
        "exercise_name": "Episode locations",
        "time": "1s 721.975698ms",
        "in_time": true,
        "results": [
            {
                "name": "Pickle Rick",
                "episode": "S03E03",
                "locations": [
                  "Earth (C-137)",
                  "Earth (Replacement Dimension)",
                  "unknown"
                ]
            }
        ]
    }
]

## Contacto

- Maximiliano Minutillo | [LinkedIn Profile](https://www.linkedin.com/in/maximiliano-minutillo/)
- email: maximilminu@gmail.com

```bash
 ██████     ██    ██    ██    ████████     ██████   ██       ██
██        ██    ██    ██    ██   ████   ██    ██    ██   ██
██          ████████    ██    ████████    ████████      ███
██          ██    ██    ██    ██          ██    ██    ██   ██
 ██████     ██    ██    ██    ██          ██    ██  ██       ██ 


░█▀▄░▀█▀░█▀▀░█░█░░░█▀█░█▀█░█▀▄░░░█▄█░█▀█░█▀▄░▀█▀░█░█░░░█▀▀░█░█░█▀█░█░░░█░░░█▀▀░█▀█░█▀▀░█▀▀
░█▀▄░░█░░█░░░█▀▄░░░█▀█░█░█░█░█░░░█░█░█░█░█▀▄░░█░░░█░░░░█░░░█▀█░█▀█░█░░░█░░░█▀▀░█░█░█░█░█▀▀
░▀░▀░▀▀▀░▀▀▀░▀░▀░░░▀░▀░▀░▀░▀▀░░░░▀░▀░▀▀▀░▀░▀░░▀░░░▀░░░░▀▀▀░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀▀▀
```
