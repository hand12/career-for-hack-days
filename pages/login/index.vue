<template>
  <section class="container">
    <p>redirect...</p>
  </section>
</template>

<script>
export default {
  created() {
    this.$message({
      showClose: true,
      message: 'ログインが必要です',
      type: 'error'
    });
    this.$router.push("/")
  }
}
</script>
