<template>
    <div id="app">
        <animal-list/>
    </div>
</template>

<script>
    import AnimalList from './components/AnimalList';

    export default {
        name: 'app',
        components : {AnimalList}
    };
</script>

<style>
    @import 'App.scss';
</style>
