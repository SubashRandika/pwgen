# Simple command line tool to generate password

This is a simple node js command line tool to generate
random passwords.

### How to use it

- Install dependencies

> npm i

- Run the tool

> node index (Options)

### Options

Short | Long | Description
---------|----------|---------
 -l | --length | Length of the password (default 8)
 -s | --save | Save password to password.txt (default false)
 -nn | --no-numbers | Exclude numbers from the password (default false)
 -ns | --no-symbols | Exclude symbols from the password (default false)

### How run pwgen from anywhere (globally)

You can create symlink to run the `pwgen` command

```sh
> npm link

# You can run
> pwgen (Options)

# To remove symlink
> npm unlink
```
