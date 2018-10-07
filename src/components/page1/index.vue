<template>
    <section>
        
        <banner/>
        <nlist/>
        <clist/>
    </section>
</template>
<script>

import banner from './banner'
import nlist from './nlist'
import clist from './clist'

export default {
    components:{
        banner,nlist,clist
    }
}
</script>
<style scoped>
    section{
        width: 100%;
        height:100%;
        padding-top:1rem;
        background: #ebebeb;
    }
</style>
