import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog">
      <h1>How does react work?</h1>
      <p>
        React is without a doubt one of the most powerful and flexible frontend
        frameworks. But with its great power comes great responsibility – it’s
        easy to misuse it and create a mess of an app. To avoid it, one needs to
        really understand how React works internally by studying its code
        implementation and structure. Coincidentally, it is also one of the best
        ways to learn React in general. Let’s do this today! Working with a
        non-opinionated framework such as React gives you a lot of freedom, but
        also introduces more room for mistakes. Wait a second… What’s the deal
        with opinionated and non-opinionated frameworks? Taming a
        non-opinionated framework During my career as a frontend developer, I’ve
        mostly been building user interfaces with two very popular frameworks:
        React and Vue (both placed in the top 10 of all GitHub-hosted projects
        with 181k and 192k stars respectively). What captivated me the most
        about these frameworks was the flexibility and freedom in web
        development that they had to offer. Back then I also had the opportunity
        to work with Ember.js – a very pleasant framework with a great Ember
        Data feature. One sentence from the documentation delighted me: Ember’s
        implementation of components hews as closely to the Web Components
        specification as possible I love native solutions. I love web components
        and I hope that one day they will gain more popularity. But that’s not
        the point. Ember, similar to Angular, is one of the so-called
        opinionated frameworks, which give you a lot of instructions and
        foundation at the cost of freedom. An opinionated framework is like a
        safety net that lowers the learning curve, taking away much of the
        flexibility in the process. React and Vue are quite the opposite.
      </p>
      <h1>props and state difference?</h1>
      <p>
      Consider props to be function parameters. Functions that return JSX or, more broadly, something renderable, such as React elements, null, a string, etc., are considered to be React components. Usually, if you have a piece of code you'd like to reuse, you can put it into a function and any dynamic values it previously used can be accepted as arguments (for instance, const five = 2 + 3 might be extracted to a function and accept parameters like const five = add(2, 3)). The same is true for JSX, except you call it using JSX syntax rather than calling it like a normal function (add(2, 3)). ( ). Props are what are referred to as the "attributes" provided in the JSX, and they are combined in
      </p>
      <h1>use case of useEffect</h1>
      <p>
      Use cases for useEffect Run once on mount to retrieve API data. Validating input field when state changes in the program. running live filtering on state change A new array value will start an animation when the state changes. Update paragraph list on fetched API data modification when the props are changed. Running on property changes: updating retrieved API data to obtain the most recent BTC price Validating input field when state changes in the program. Another excellent usage of useEffect is to validate an input while characters are being added. Utilizing useState to keep the input in a state, the input is validated each time it changes, providing the user with rapid feedback. To postpone checking the input field for each user, we may include the setTimeout() function.
      </p>
    </div>
  );
};

export default Blog;
