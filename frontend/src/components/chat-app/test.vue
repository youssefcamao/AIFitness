<template>
    <div class="chat-base">
        <div class="overlap-wrapper">
            <div class="overlap">
                <div class="component">
                    <div class="overlap-group">
                        <div class="back"></div>
                        <div class="background"></div>
                        <div class="frame">
                            <div class="navbar">
                                <div class="div">
                                    <div class="text-wrapper">New chat with</div>
                                    <div class="div-wrapper">
                                        <div class="text-wrapper-2">AI</div>
                                    </div>
                                </div>
                                <img class="line" src="img/image.svg" />
                            </div>
                            <div class="frame-2">
                                <div class="frame-3">
                                    <div class="frame-4">
                                        <div class="frame-5"><img class="image" src="img/image-7.png" /></div>
                                        <div class="frame-6">
                                            <p class="p">&#34;Hi:) how are you can you help me out with my gym exercises
                                                today ?</p>
                                        </div>
                                    </div>
                                    <div class="frame-4">
                                        <div class="frame-5">
                                            <div class="component-2">
                                                <div class="text-wrapper-3">AI</div>
                                            </div>
                                        </div>
                                        <div class="frame-6">
                                            <p class="p">Hello, I have couple of suggestions for you :&gt;</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="frame-7">
                                    <div class="group">
                                        <div class="overlap-group-2">
                                            <div class="div-light"></div>
                                            <div class="div-light-2"></div>
                                            <div class="div-light-3"></div>
                                            <div class="div-light-4"></div>
                                        </div>
                                    </div>
                                    <div class="frame-wrapper">
                                        <div class="new-chat-wrapper">
                                            <div class="new-chat">
                                                <div class="frame-8">
                                                    <div class="text-wrapper-4">Send a message</div>
                                                </div>
                                                <img class="send" src="../assets/send.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="new-chat-2">
                    <img class="img" src="img/line-130.svg" />
                    <div class="frame-9">
                        <div class="new-chat-3">
                            <div class="frame-10">
                                <div class="frame-11">
                                    <img class="mask-group" src="img/mask-group.png" />
                                    <div class="text-wrapper-5">Yossi Molcho</div>
                                </div>
                                <div class="new-chat-4">
                                    <div class="text-wrapper-6">Pro</div>
                                </div>
                            </div>
                            <img class="line-2" src="img/line-130-2.svg" />
                        </div>
                        <div class="frame-12">
                            <div class="frame-13">
                                <div class="new-chat-5">
                                    <img class="add" src="img/add-fill1-wght400-grad0-opsz48-1.svg" />
                                    <div class="text-wrapper-7">New chat</div>
                                </div>
                            </div>
                            <div class="frame-14">
                                <div class="frame-15">
                                    <div class="chat-wrapper"><img class="chat" src="img/chat-1.png" /></div>
                                    <div class="text-wrapper-8">Teach me payton</div>
                                </div>
                                <div class="frame-15">
                                    <div class="chat-wrapper"><img class="chat" src="img/chat-1-3.png" /></div>
                                    <div class="text-wrapper-8">How AI works</div>
                                </div>
                                <div class="frame-15">
                                    <div class="chat-wrapper"><img class="chat" src="img/image.png" /></div>
                                    <p class="text-wrapper-8">Help me to create a prici...</p>
                                </div>
                                <div class="frame-15">
                                    <div class="chat-wrapper"><img class="chat" src="img/chat-1-2.png" /></div>
                                    <p class="text-wrapper-8">New copy for my new we...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
</script>
  
<style>
.chat-base {
    background-color: #0e1116;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

.chat-base .overlap-wrapper {
    background-color: #0e1116;
    width: 1920px;
    height: 1080px;
}

.chat-base .overlap {
    position: relative;
    height: 1080px;
}

.chat-base .component {
    position: absolute;
    width: 1920px;
    height: 1080px;
    top: 0;
    left: 0;
    background-color: #000000;
    overflow: hidden;
}

.chat-base .overlap-group {
    position: relative;
    width: 2195px;
    height: 1449px;
    top: -369px;
    left: -275px;
}

.chat-base .back {
    position: absolute;
    width: 1427px;
    height: 1407px;
    top: 0;
    left: 0;
    background-color: #1d692ccc;
    border-radius: 713.72px/703.33px;
}

.chat-base .background {
    position: absolute;
    width: 1920px;
    height: 1080px;
    top: 369px;
    left: 275px;
    background-color: #000000b2;
    backdrop-filter: blur(500px) brightness(100%);
    -webkit-backdrop-filter: blur(500px) brightness(100%);
}

.chat-base .frame {
    display: flex;
    flex-direction: column;
    width: 1639px;
    height: 1080px;
    align-items: center;
    justify-content: space-between;
    padding: 0px 24px 24px;
    position: absolute;
    top: 369px;
    left: 556px;
}

.chat-base .navbar {
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0px;
    position: relative;
    align-self: stretch;
    width: 100%;
}

.chat-base .div {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    position: relative;
    flex: 0 0 auto;
    margin-top: -7.36px;
    margin-bottom: -7.36px;
}

.chat-base .text-wrapper {
    position: relative;
    width: fit-content;
    font-family: "Satoshi-Medium", Helvetica;
    font-weight: 500;
    color: #ffffffcc;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 16.5px;
    white-space: nowrap;
}

.chat-base .div-wrapper {
    position: relative;
    width: 32px;
    height: 30.72px;
    border-radius: 22.45px;
    background: linear-gradient(180deg, rgb(214, 250, 0) 0%, rgb(109, 222, 0) 100%);
}

.chat-base .text-wrapper-2 {
    position: absolute;
    width: 17px;
    top: 6px;
    left: 8px;
    font-family: "Zian-Regular", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 16.6px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
}

.chat-base .line {
    position: absolute;
    width: 1591px;
    height: 1px;
    top: 63px;
    left: 0;
    object-fit: cover;
}

.chat-base .frame-2 {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;
    position: relative;
    flex: 0 0 auto;
}

.chat-base .frame-3 {
    display: flex;
    flex-direction: column;
    width: 1379px;
    align-items: flex-start;
    gap: 56px;
    position: relative;
    flex: 0 0 auto;
}

.chat-base .frame-4 {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    position: relative;
    flex: 0 0 auto;
}

.chat-base .frame-5 {
    display: flex;
    width: 40px;
    height: 40px;
    align-items: flex-start;
    gap: 10px;
    position: relative;
    border-radius: 4px;
    border: 1px solid;
    border-color: #393939;
    background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(77.56, 77.56, 77.56, 0) 100%);
}

.chat-base .image {
    position: relative;
    width: 40px;
    height: 40px;
    object-fit: cover;
}

.chat-base .frame-6 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    position: relative;
    flex: 0 0 auto;
    background-color: #00000066;
    border-radius: 10px;
}

.chat-base .p {
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: "Satoshi-Regular", Helvetica;
    font-weight: 400;
    color: #ffffff;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 16.5px;
    white-space: nowrap;
}

.chat-base .component-2 {
    position: relative;
    width: 41.67px;
    height: 40px;
    margin-right: -1.67px;
    border-radius: 3.92px;
    border: 1px solid;
    border-color: #393939;
    background: linear-gradient(180deg, rgb(214, 250, 0) 0%, rgb(109, 222, 0) 100%);
}

.chat-base .text-wrapper-3 {
    position: absolute;
    width: 22px;
    top: 7px;
    left: 9px;
    font-family: "Zian-Regular", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 21.6px;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
}

.chat-base .frame-7 {
    display: flex;
    width: 1531px;
    align-items: center;
    gap: 20px;
    position: relative;
    flex: 0 0 auto;
}

.chat-base .group {
    position: relative;
    width: 48px;
    height: 48px;
}

.chat-base .overlap-group-2 {
    position: relative;
    height: 48px;
}

.chat-base .div-light {
    position: absolute;
    width: 19px;
    height: 19px;
    top: 0;
    left: 14px;
    background-color: var(--convychatlimeade);
    border-radius: 29.07px;
    transform: rotate(180deg);
    filter: blur(2px);
}

.chat-base .div-light-2 {
    width: 20px;
    top: 29px;
    left: 13px;
    background-color: var(--convychatguardsman-red);
    position: absolute;
    height: 19px;
    border-radius: 29.07px;
    transform: rotate(180deg);
    filter: blur(2px);
}

.chat-base .div-light-3 {
    width: 19px;
    top: 14px;
    left: 29px;
    background-color: var(--convychatrobins-egg-blue);
    position: absolute;
    height: 19px;
    border-radius: 29.07px;
    transform: rotate(180deg);
    filter: blur(2px);
}

.chat-base .div-light-4 {
    width: 19px;
    top: 14px;
    left: 0;
    background-color: var(--convychatgreen-haze);
    position: absolute;
    height: 19px;
    border-radius: 29.07px;
    transform: rotate(180deg);
    filter: blur(2px);
}

.chat-base .frame-wrapper {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    position: relative;
    flex: 0 0 auto;
}

.chat-base .new-chat-wrapper {
    display: flex;
    flex-direction: column;
    width: 1459px;
    align-items: flex-start;
    gap: 12px;
    position: relative;
    flex: 0 0 auto;
}

.chat-base .new-chat {
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    position: relative;
    align-self: stretch;
    width: 100%;
    background-color: #0e1016b2;
    border-radius: 4px;
    border: 1px solid;
    border-color: #ffffff54;
    backdrop-filter: blur(500px) brightness(100%);
    -webkit-backdrop-filter: blur(500px) brightness(100%);
}

.chat-base .frame-8 {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    position: relative;
    flex: 0 0 auto;
}

.chat-base .text-wrapper-4 {
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: "Satoshi-Regular", Helvetica;
    font-weight: 400;
    color: #ffffff99;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 16.5px;
    white-space: nowrap;
}

.chat-base .send {
    position: relative;
    width: 28px;
    height: 28px;
}

.chat-base .new-chat-2 {
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 1080px;
    align-items: flex-start;
    justify-content: space-around;
    gap: 12px;
    padding: 0px 24px 780px;
    position: absolute;
    top: 0;
    left: 0;
}

.chat-base .img {
    width: 1px;
    height: 1080px;
    top: 0;
    left: 280px;
    position: absolute;
    object-fit: cover;
}

.chat-base .frame-9 {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    position: relative;
    flex: 0 0 auto;
    margin-top: -1px;
    margin-bottom: -1px;
}

.chat-base .new-chat-3 {
    display: flex;
    width: 232px;
    height: 64px;
    align-items: center;
    gap: 24px;
    padding: 24px 0px;
    position: relative;
}

.chat-base .frame-10 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex: 1;
    flex-grow: 1;
    margin-top: -8px;
    margin-bottom: -8px;
}

.chat-base .frame-11 {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    position: relative;
    flex: 0 0 auto;
}

.chat-base .mask-group {
    position: relative;
    width: 32px;
    height: 32px;
}

.chat-base .text-wrapper-5 {
    position: relative;
    width: fit-content;
    font-family: "Satoshi-Medium", Helvetica;
    font-weight: 500;
    color: #ffffffcc;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 16.5px;
    white-space: nowrap;
}

.chat-base .new-chat-4 {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    position: relative;
    flex: 0 0 auto;
    background-color: #f6e6a6;
    border-radius: 4px;
    backdrop-filter: blur(50px) brightness(100%);
    -webkit-backdrop-filter: blur(50px) brightness(100%);
}

.chat-base .text-wrapper-6 {
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: "Satoshi-Bold", Helvetica;
    font-weight: 700;
    color: #8d7324;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 16.5px;
    white-space: nowrap;
}

.chat-base .line-2 {
    width: 232px;
    height: 1px;
    top: 63px;
    left: 0;
    position: absolute;
    object-fit: cover;
}

.chat-base .frame-12 {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    position: relative;
    flex: 0 0 auto;
}

.chat-base .frame-13 {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
}

.chat-base .new-chat-5 {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 12px;
    position: relative;
    flex: 1;
    flex-grow: 1;
    background-color: var(--convychatalto);
    border-radius: 4px;
    backdrop-filter: blur(50px) brightness(100%);
    -webkit-backdrop-filter: blur(50px) brightness(100%);
}

.chat-base .add {
    position: relative;
    width: 16px;
    height: 16px;
}

.chat-base .text-wrapper-7 {
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: "Satoshi-Medium", Helvetica;
    font-weight: 500;
    color: #000000;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 16.5px;
    white-space: nowrap;
}

.chat-base .frame-14 {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    flex: 0 0 auto;
}

.chat-base .frame-15 {
    display: flex;
    width: 232px;
    height: 40px;
    align-items: center;
    gap: 10px;
    padding: 4px;
    position: relative;
}

.chat-base .chat-wrapper {
    display: flex;
    flex-direction: column;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    position: relative;
}

.chat-base .chat {
    position: relative;
    width: 16px;
    height: 16px;
    margin-top: -6px;
    margin-bottom: -6px;
    margin-left: -6px;
    margin-right: -6px;
    object-fit: cover;
}

.chat-base .text-wrapper-8 {
    position: relative;
    width: fit-content;
    font-family: "Satoshi-Medium", Helvetica;
    font-weight: 500;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 16.5px;
    white-space: nowrap;
}
</style>