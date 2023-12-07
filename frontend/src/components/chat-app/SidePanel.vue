<script setup lang="ts"></script>
<template>
    <div class="sidepanel">
        <div class="user">
            <img class="mask-group" src="../../assets/test_image.png" />
            <h4>Yossi Molcho</h4>
            <div class="user-sub">Pro</div>
        </div>
        <button class="newChat-button"><span>+</span>New chat</button>
        <div class="chat-history">
            <div class="chat-history">
                <div class="chat-titel">
                    <div class="titel-text">Teach me payton</div>
                </div>
                <div class="chat-titel">
                    <div class="titel-text">How AI works</div>
                </div>
                <div class="chat-titel">
                    <div class="titel-text">Help me to get a full diet</div>
                </div>
                <div class="chat-titel">
                    <div class="titel-text">New copy for my new </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.chat-history {
    width: 100%;
    margin-top: 25px;
}

.chat-titel {
    display: flex;
    font-size: 15px;
    padding: 12px 8px 12px 8px;
    border-radius: 8px;
    cursor: pointer;

    img {
        width: 16px;
        height: 16px;
        margin-right: 12px;
    }

    .titel-text {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        height: 20px;
        overflow: hidden;
    }

    &:hover {
        background-color: rgb(0, 0, 0, 0.5);
    }
}

.newChat-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    padding: 8px 0 8px 0;
    background-color: #DDDDDD;
    cursor: pointer;
    font-weight: 550;
    border-radius: 4px;
    border: none;

    span {
        margin-right: 10px;
        font-size: 20px;
    }

    &:hover {
        background-color: white;
    }
}

.user {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 100%;
    padding: 30px 0 30px 0;
    border-bottom: 2px solid rgba(221, 221, 221, .08);
    margin-bottom: 12px;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
    }

    h4 {
        margin-right: auto;
    }

    .user-sub {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F6E6A6;
        color: #8D7324;
        border-radius: 4px;
        padding: 2px 8px;
    }
}

.sidepanel {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px 0;
    height: 100%;
    width: 250px;
    border-right: 2px solid rgba(221, 221, 221, .08);
}
</style>