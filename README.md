<h1 align="center>Kicking Off Hacktoberfest with ACM-VIT!</h1>
<p align="center">
<img src="https://github.com/ACM-VIT/.github/raw/master/profile/Forktober2022.png">
</p>

<h2 align="center"> Budgetty </h2>

<p align="center"> 
A simple budget tracker with lots of useful featuress.
</p>

<p align="center">
  <a href="https://acmvit.in/" target="_blank">
    <img alt="made-by-acm" src="https://img.shields.io/badge/MADE%20BY-ACM%20VIT-blue?style=for-the-badge" />
  </a>
    <!-- Uncomment the below line to add the license badge. Make sure the right license badge is reflected. -->
    <!-- <img alt="license" src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" /> -->
    <!-- forks/stars/tech stack in the form of badges from https://shields.io/ -->
</p>

---

## Submitting a Pull Request

- Fork the repository by clicking the fork button on top right corner of the page
- Clone the target repository. To clone, click on the clone button and copy the https address. Then run
<pre><code>git clone [HTTPS-ADDRESS]</code></pre>
- Go to the cloned directory by running
<pre><code>cd [NAME-OF-REPO]</code></pre>
- Create a new branch. Use
<pre><code> git checkout -b [YOUR-BRANCH-NAME]</code></pre>
- Make your changes to the code. Add changes to your branch by using
<pre><code>git add .</code></pre>
- Commit the chanes by executing
<pre><code>git commit -m "your msg"</code></pre>
- Push to remote. To do this, run
<pre><code>git push origin [YOUR-BRANCH-NAME]</code></pre>
- Create a pull request. Go to the target repository and click on the "Compare & pull request" button. **Make sure your PR description mentions which issues you're solving.**
  <img src="https://drive.google.com/u/1/uc?id=1f9JKAR-kRvCRGxIs_SAvegaYDPx53T9G&export=download"></img>
- Wait for your request to be accepted.

---

## Guidelines for Pull Request

<!-- general guidelines here -->

- Avoid pull requests that :
  - are automated or scripted
  - that are plagarized from someone else's branch
- Do not spam
- Project maintainer's decision on validity of PR is final.

For additional guidelines, refer to [participation rules](https://hacktoberfest.digitalocean.com/details#rules)

---

## Overview

Budgetty is a very simple, barebones yet feature rich app for tracking your daily spends. It can keep track of expenses as well as income, all organised in a very nicely styled way.

### Usage

To run this app, you will need the following environment variables defined in a `.env` file at the root of the application. Copy the given `.env.example` into another file called `.env`, and fill in the values as follows

1. `DATABASE_URL`: This is the Postgres connection string to your Postgres database that the application will use. This database can either be running somewhere on the cloud, or on your own local system using something like [Docker](https://docker.com), or just plain Postgres on your system.

2. `The GitHub credentials`: For this, you will have to go to GitHub > Settings > Developer Settings > OAuth Apps, and click on "New OAuth App". This will prompt you enter the following details.

![OAuth App Details](https://i.imgur.com/EjwRN9E.png)

Once you click on "Register Application", copy the given Client ID and paste it into the `.env` file. Then, generate a new client secret, and copy the value and paste it into the `.env` file and voila, you're done :)

### Running the App

To run the App, you will first have to clone the repo and install all the dependencies by running -

```bash
git clone [project url]
cd budgetty
npm install
```

We are using Nx as a monorepo tool along with Next.js and Nest.js for the frontend and backend respectively. To run the Next.js frontend, run -

```bash
nx serve website
```

And to run the Nest backend, run

```bash
nx serve backend
```

### Generating new Controllers/Components

To generate new components for the frontend, run -

```bash
nx generate @nrwl/next:component [name of the component]
```

A new component will be generated with the given name in the components folder in the frontend.

Similarly, to generate new controller for the backend, run -

```bash
cd apps/backend # change to the backend folder
nx generate @nrwl/nest:controller [name of the controller]
```

A new folder will be created with the given name. Inside of it, you will find a file `name-of-the-controller.contoller.ts` which houses the controller logic.

## Contributing

Refer to [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## Authors

**Authors:** [Anand Rajaram](https://github.com/anandrajaram21)
**Contributors:** <a href="https://github.com/anandrajaram21/budgetty/graphs/contributors">
<img src="https://contrib.rocks/image?repo=anandrajaram21/budgetty" />
</a>
