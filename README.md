# VuElm

### It's a Vue state management inspired by Elm architecture.

## Concepts

There are basically four elements on Elm architecture: Model, Actions, Updates and View.

![alt text](https://github.com/keuller/vuelm/raw/master/docs/images/elm_arch.png)

The image above describes the flow of Elm's architecture. **Vuelm** tries to bring it to Vue components.

To know more about Elm Architecture, see this [link](http://guide.elm-lang.org/architecture/).

## Getting Started

Let's to get started with a simple application: the counter.

First lets create our model. The model is composed by 3 parts: state, updates and actions.

```javascript
import { store, types } from 'vuelm'

const Type = types('INCREMENT', 'DECREMENT')

const state = {
  count: 0
}

const updates = {
  [Type.INCREMENT](state) {
    state.count = state.count + 1
    return state
  },

  [Type.DECREMENT](state) {
    state.count = state.count - 1
    return state
  }
}

const actions = {
  increment() {
    this.update(Type.INCREMENT)
  },

  decrement() {
    this.update(Type.DECREMENT)
  }
}

export default store(state, updates, actions)
```

The code above is pretty simple and straightforward. Ths state is representated by ```{ count: 0 }```.

The updates may be of two types: ```INCREMENT``` or ```DECREMENT```. The updates is responsible for change the state and produces a new state after those changes. In this case we're just increment the **count** plus 1 or decrement minus 1.

The actions just call ```this.update(type)``` method passing the **type** of update that we need to.

To build the model object, we must to join those three elements, passing to ```store``` function as arguments.

Now we need to create our Vue component that will render the **counter**. The code below show the counter component:

```html
<template>
  <div class="container">
    <label>Counter</label>
    <strong>{{count}}</strong>
    <br/>
    <button class="button" @click="increment()">Increment</button>
    <button class="button" @click="decrement()">Decrement</button>
  </div>
</template>

<script>
  import { connect } from 'vuelm'
  import counter from 'stores/counter'

  const Counter = {
    name: 'Counter',
    data() {
      return { count: 0 }
    }
  }

  export default connect(Counter, { counter })
</script>

```

This component has two buttons which are used to invoke actions from our store. We use ```connect``` function to bind the component with store. You can call actions directly from store, as you can see in above example, we associate ```increment``` and ```decrement``` action into component.

As we can see Vuelm brings the simplicity and powerful design from Elm architecture to our Vue components.

## How To Install

To install Vuelm, you can use:

```bash
$ yarn add vuelm     // npm install vuelm -S
```

Or you can use [vue-starter](https://github.com/keuller/vue-starter) template, as shown below:

```javascript
$ vue init keuller/vue-starter [project-name]
```

See the examples to learn more about Vuelm.

## See Online Demos

* [Counter Demo](http://keuller.com/vuelm/demos/counter/)
* [Task Manager Demo](http://keuller.com/vuelm/demos/taskman/)
* [GUS Demo](http://keuller.com/vuelm/demos/gus/)
* [Financial](http://keuller.com/vuelm/demos/financial)

