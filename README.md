# Insight For Tomorrow

This repository was created with the goal of sharing summaries of the various course units of the LEIC-A program at Instituto Superior Técnico. Any contribution is welcome (except for material from professors, such as slides and books; please contact us first).

## How to contribute?

If you're thinking about contributing to the LEIC Abstracts, we've created a step-by-step guide just for you!

Go to [our documentation to learn everything you need](https://docs.leic.pt/).

If you already understand the subject and just want quick instructions, follow the steps below.

### Installing tools

To run the code locally, you need the following tools: `git`, `nodejs`, and `yarn`.

Instructions for installation on Windows and Linux are below.

#### Windows

1. Fazer [download do `git`](http://git-scm.com/) e instalar o executável.
2. Fazer [download do `node`](https://nodejs.org/en/) e instalar a última versão LTS (18.X ou superior).
3. Instalar o `yarn` através da **PowerShell**, correndo o comando `npm i -g yarn`.

#### Linux/macOS

1. Instalar o `git` e o `node` pelo package manager da distribuição. Atenção que o `node` em Debian/Ubuntu/etc está desatualizado.
   Recomendo seguir [este tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-3-installing-node-using-the-node-version-manager) para ter o Node 18 LTS.
2. Instalar o `yarn` através do terminal, correndo o comando `npm i -g yarn`.


   ```bash
   git clone git@github.com:<o-teu-username>/resumos-leic.git
   ```

3. Adicionar o remote `upstream` ao repositório:

   ```bash
   git remote add upstream https://github.com/leic-pt/resumos-leic.git
   ```

4. Instalar dependências:

   ```bash
   cd resumos-leic
   yarn               # or yarn install
   ```

### Modifying Content

The `.md` (markdown) files are located in the respective UC folder within `content`.

Once a `.md` file is added to the respective UC folder (and associated with a `type`), it is accessible from the sidebar.

The respective `path` (`/asa/introducao`, for example) still needs to be defined.

Files can also have different categories, appearing in different subsections of the sidebar depending on the category.

In principle, you will only be useful for the `content` category, which should be added to the `header` of each file.

Each file should contain a `header` with useful meta-information corresponding to each file, mainly:

- `title: <title>`, where `<title>` will be the title that appears associated with the page corresponding to the file in the abstracts;

- `description: <bullet points>`, a section that should succinctly indicate the important points covered in this chapter of the summaries (and which appears in the URL embed when sharing the page link);

- `path: /<UC>/<pagename>`, self-explanatory;

- `type: <category>`, as mentioned above, you will probably only be interested in the `content` category.

To start the local server, run the command:

```bash
yarn dev
```

### Format the code

Before committing, it's recommended to run `prettier` (if you're using a text editor - e.g., VSCode - that already runs it automatically, this step is unnecessary). You should run the command in the root of the repository (`/home/.../resumos-leic`, therefore).
```bash
yarn format
```
