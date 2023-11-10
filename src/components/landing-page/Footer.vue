<script setup lang="ts">
</script>

<template>
    <footer class="footer-section">
        <div class="footer--text">YR Technology Ltd., 2023. All rights reserved.</div>
        <div class="footer--links">
            <a href="https://policies.google.com/privacy?hl=de&fg=1">Privacy Policy</a>
            <a href="https://policies.google.com/terms?hl=de&fg=1">Terms and Conditions</a>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top: 1px solid rgba(221, 221, 221, .15);
    width: 97vw;
    padding: 20px 30px;
    color: #777;
    font-family: Euclid Circular A, sans-serif;
    font-size: 13px;

    .footer--links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;

        a {
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>