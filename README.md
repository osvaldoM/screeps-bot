# screeps-bot
This is yet another AI for the MMO strategy game for programmers, [screeps](https://screeps.com)

I'm still working to generalize the code to run efficiently with different room designs and multi-rooms environments, but at this point, it should work reasonably well on a single room.

## Installation

Install dependencies

```bash
npm install
```

## deployment

- rename **.screeps.json.example** to **creeps.json**

- update the file according to your login credentials

To build and push to server, run:
```bash
npm run screeps
```

To only build, run:
```bash
npm run build
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
