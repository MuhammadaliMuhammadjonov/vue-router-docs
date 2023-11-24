<template >
    <div>
        <nav>
            <!-- Default component orqali -->
            <router-link to="/" class="m-1" >Main</router-link>
            <router-link to="/about" class="m-1" >About</router-link>

            <!-- O'zimizi component orqali -->
            <button @click="$router.push('/')"    class="btn btn-danger m-1" >Main</button>
            <button @click="$router.push('/about')"  class="btn btn-danger m-1" >About</button>

        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>