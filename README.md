<img src="https://cdn.rawgit.com/jukbot/smart-industry/e6721339/imes_splash.png" alt="logo"/>

[![Build Status](https://travis-ci.org/jukbot/smart-industry.svg?branch=master)](https://travis-ci.org/jukbot/smart-industry)
[![Build status](https://ci.appveyor.com/api/projects/status/9xe5idqvwiy1a812/branch/master?svg=true)](https://ci.appveyor.com/project/jukbot/smart-industry/branch/master)
[![Dependency Status](https://gemnasium.com/badges/github.com/jukbot/smart-industry.svg)](https://gemnasium.com/github.com/jukbot/smart-industry)
[![GitHub (pre-)release](https://img.shields.io/github/release/jukbot/smart-industry/all.svg)](https://github.com/jukbot/smart-industry/releases/)
[![Status](https://img.shields.io/badge/status-alpha-yellow.svg)](https://github.com/jukbot/smart-industry/projects/2)
[![Polymer 2 supported](https://img.shields.io/badge/Polymer2-supported-f50057.svg)](https://github.com/jukbot/smart-industry/)
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)


# About IMES Project

A manufacturing execution system (MES) involves using computers to track and record the entire manufacturing process from extracting raw materials to producing finished products. They mainly function as stand-alone systems that primarily collect data about the workplace. A MES can be used in a wide variety of industries including packing goods, metal or plastic production, and automation.  The main purpose for using a MES is to improve production, minimize delays, and make delivery of goods easier.

A “Smart” MES builds on top of the original idea of MES by using mathematical algorithms that allow decision making. Henceforth, the information system will be able to select the most suitable solution in a problem scenario. By employing a Smart MES system with improved decision making, it can further enhance the performance of manufacturing and drive down production costs.

While a majority of Thailand still utilizes Industry 2.0, it still lacks the support for manufacturing systems that can reduce errors in the workflow and allow businesses to work smarter. The problem can be seen when small to medium businesses are not able to invest in high-technology systems or hire adequate personnel to manage production, they will be stuck with the current standards. This is known as the Industry 2.0 “trap”. It is one of the driving forces that this project was put forth. Smart MES technology can provide an affordable solution to factory owners and advance the standards for industry into the future. 

This project, involves building a Smart MES web application that will help manufacturers plan the manufacturing process, simulate the workflow of the planned process, track the events of the actual production line and finally generate a report  of the actual process. This will help manufacturers build a more effective production line as well as reduce and prevent potential problems that can occur throughout the manufacturing process. Chapter 2 will cover the feasibility study for the Smart MES project.

### Project Objective

- Help workers calculate and select the most suitable job priority for managing process scheduling.
- Increase the degree of automation and digitization of production, manufacturing and industrial processes.
- Improve efficiency in the production and planning processes by managing the entire value chain process.
- Visualize the workflow and the status of jobs by simulating a building block diagram.


### Implementation Techniques
According to the scope, this project uses an Internet connection to connect to an online web-based application. Our implementation will attempt to work using the Javascript language which is cross platform, flexible and able to work on mobile devices. 


In particular, the following processes and algorithms will be used in this project: linear programming (LP), Statistical Process Control (SPC), Overall Equipment Effectiveness (OEE) and production scheduling algorithms which include Earliest Due Date (EDD) and Shortest Processing Time (SPT).

``Resource Usage Optimization using Linear Programming (LP)``
Linear programming (LP) is used for resource optimization, as long as the output function is linear.  This helps in cases where there are feasible solutions, or better yet, optimal solutions. However, if specific algorithms are required, the correlation values of the outcome may be weak. LP can only solve convex problems directly.

``Overall Equipment Effectiveness (OEE)``
Overall Equipment Effectiveness (OEE) is a tool used to measure manufacturing performance. In general, there are a lot of data and a large number of measurement methods that are outdated and cannot be used to improve productivity. Sometimes there are too many criteria that are unrelated to each other and an inconsistency of fragmented data. Thus, OEE is an ideal way to measure the quality standard of manufacturing apart from knowing the machine’s performance. It can provide information about the cause of performance loss and can suggest ways to decrease that loss accurately and systematically. 

From the factors that are shown in Figure 2.6, there are three major components in calculating OEE. First, the availability that measures the total amount of time that the system is running along with undesired downtime. Second, performance that measures the number of units produced in a time cycle. A perfect performance rating would mean that the system is running as fast as possible. Third, quality of the manufacturing system is measured. Quality involves measuring the number of faulty parts in production. A system with 100% quality means that there is no defective parts being produced.

``Original quantity (Q0)``
Original quantity is the quantity of an order that includes the backup order items. A damaged item can  be replaced the with a backup when unexpected events occur.

``Scheduling Algorithms``
Scheduling optimization involves selecting the appropriate scheduling method by considering the resources and time available. By implementing the decision making model which analyzes the current job in the system, it rearranges the job priorities to meet the condition and get the best outcome. There are two production scheduling algorithms that will be used in this project. The first is EDD which takes into account the due date of the product and sorts the earliest items first. The second algorithm is SPT which considers the time to process the product. The products with the fastest processing time will take priority. 


### Demo User Login 

[Login here](https://smart-mes.firebaseapp.com/)

| E-mail | Password | 
|---------|---------------|
| demo@imes.in.th | demouser |

### Changelog in 1.0.5 Preview

Writing in progress..


### About Polymer 2 

This template is a starting point for building apps using a drawer-based
layout. The layout is provided by `app-layout` elements.

This template, along with the `polymer-cli` toolchain, also demonstrates use
of the "PRPL pattern" This pattern allows fast first delivery and interaction with
the content at the initial route requested by the user, along with fast subsequent
navigation by pre-caching the remaining components required by the app and
progressively loading them on-demand as the user navigates through the app.

The PRPL pattern, in a nutshell:

* **Push** components required for the initial route
* **Render** initial route ASAP
* **Pre-cache** components for remaining routes
* **Lazy-load** and progressively upgrade next routes on-demand

### Migrating from Polymer Starter Kit v1?

[Check out our blog post that covers what's changed in PSK2 and how to migrate!](https://www.polymer-project.org/1.0/blog/2016-08-18-polymer-starter-kit-or-polymer-cli.html)

### Setup Project

##### Prerequisites

NodeJS (required version >= 6.x)

    https://nodejs.org/en/

Install [npm](https://www.npmjs.com) (required version >= 5.x)

    npm i npm -g

Install [Yarn](https://yarnpkg.com/en/) (required version >= 1.0.2)

    npm install -g yarn

Install [polymer-cli](https://github.com/Polymer/polymer-cli): (require version >= 1.5.5)

    yarn add global polymer-cli

`Note: polymer-cli is not able to install with npm version 5.x.x for now. Please use yarn to install.`

Install [bower](https://bower.io/) (require version >= 1.8.2)

    yarn add global bower


### Install dependency

    npm install
    bower install

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open


### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The output files are in `build/default` which suitable for serving from a HTTP/2+Push compatible server.

Build the project: 

    polymer build

### Preview the build

This command serves the production version of the app at `http://localhost:8080`
generated using fragment bundling:

    polymer serve build/default --open

### Run lint

This command will run
[Polymer Lint](https://github.com/Polymer/polymer-cli) 

    polymer lint --input src/**/*.html

### Run tests

This command will run
[Web Component Tester](https://github.com/Polymer/web-component-tester) against the
browsers currently installed on your machine.

    polymer test

### Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections
of the application.  Each new demand-loaded fragment should be added to the
list of `fragments` in the included `polymer.json` file.  This will ensure
those components and their dependencies are added to the list of pre-cached
components (and will have bundles created in the fallback `bundled` build).
