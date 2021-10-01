export const string = `
/* 画一个脸超大的胖红鸟，移动端脸可以大得超出屏幕 */

:root {
    --background: #64c2ed;
    --body: #d7202d;
    --mark: #a81725;
    --beak: #fcba1e;
    --chest: #e9caae;
    --white: #ffffff;
    --black: #000000;
}

#bird {
    background: var(--background);
}

.head {
    position: absolute;
    width: 420px;
    height: 405px;
    top: 52%;
    left: 50%;
    transform: translate(-42%, -50%);
    border-radius: 100% 100% 100% 100% / 100% 110% 80% 100%;
    background: var(--body);
    border: 10px solid var(--black);
}

.eyebrow {
    position: absolute;
    width: 27px;
    border-top: 130px solid var(--black);
    border-bottom: 1px solid transparent;
    border-left: 14px solid transparent;
    border-right: 0;
    z-index: 2;
}


.eyebrow.eyebrow-left {
    top: 87px;
    left: 200px;
    transform: scaleX(-1) rotate(80deg);
}


.eyebrow.eyebrow-right {
    top: 87px;
    left: 324px;
    transform: rotate(80deg);
}


.eye {
    position: absolute;
    width: 98px;
    height: 86px;
    border-radius: 65% 0 40% 100% / 100% 100% 64% 100%;
    background: var(--white);
    border: 6px solid var(--black);
    z-index: 1;
}


.eye.eye-left {
    top: 164px;
    left: 174px;
}


.eye.eye-right {
    top: 158px;
    left: 282px;
    transform: scaleX(-1) rotate(5deg);
}


.eye::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 35px;
    background: var(--black);
    border-radius: 50%;
    left: 50px;
    top: 18px;
}


.beak-left {
    position: absolute;
    height: 116px;
    width: 126px;
    border: 6px solid;
    border-color: transparent transparent transparent var(--black);
    border-radius: 35% 45% 13% 20% / 75% 100% 100% 75%;
    z-index: 3;
    top: 228px;
    left: 223px;
    transform: rotate(44deg);
}


.beak-left::after {
    content: "";
    position: absolute;
    height: 82px;
    border: 6px solid;
    border-color: transparent transparent transparent var(--black);
    top: 58px;
    left: 46px;
    transform: rotate(-90deg);
    border-radius: 40%;
}


.beak-right {
    position: absolute;
    height: 118px;
    width: 126px;
    border: 6px solid;
    transform: rotate(-50deg);
    border-color: transparent var(--black) transparent transparent;
    z-index: 3;
    top: 227px;
    left: 219px;
    border-radius: 35% 45% 13% 20% / 75% 100% 100% 75%;
}


.beak-right::after {
    content: "";
    position: absolute;
    height: 90px;
    border: 6px solid;
    border-color: transparent var(--black) transparent transparent;
    top: 47px;
    left: 56px;
    transform: rotate(105deg);
    border-radius: 30%;
}


.beak-bottom {
    position: absolute;
    height: 134px;
    width: 186px;
    border: 6px solid;
    border-color: transparent transparent var(--black) transparent;
    z-index: 3;
    top: 152px;
    left: 192px;
    border-radius: 26%;
}

.beak-background-one {
    position: absolute;
    width: 96px;
    height: 98px;
    background: var(--beak);
    top: 233px;
    left: 231px;
    z-index: 2;
    transform: rotate(44deg);
}


.beak-background-one::after {
    content: '';
    position: absolute;
    width: 106px;
    height: 118px;
    background: var(--beak);
    top: -22px;
    left: 4px;
    z-index: 2;
    transform: rotate(-95deg);
    border-radius: 0 46% 0 120% / 55%;
}

.mark-one {
    position: absolute;
    width: 72px;
    height: 88px;
    background: var(--mark);
    top: 189px;
    left: 150px;
    border-radius: 50%;
    transform: rotate(10deg);
}


.mark-one::after {
    content: '';
    position: absolute;
    width: 72px;
    height: 88px;
    background: var(--mark);
    top: -39px;
    left: 182px;
    border-radius: 50%;
    transform: rotate(-10deg);
}


.mark-two {
    position: absolute;
    width: 38px;
    height: 70px;
    background: var(--mark);
    top: 214px;
    left: 104px;
    border-radius: 50%;
}


.mark-three {
    position: absolute;
    width: 30px;
    height: 40px;
    background: var(--mark);
    top: 256px;
    left: 58px;
    border-radius: 50%;
}


.tail-one {
    position: absolute;
    width: 18px;
    border-bottom: 68px solid var(--black);
    border-top: 1px solid transparent;
    border-left: 24px solid transparent;
    border-right: 0;
    top: 96px;
    left: -37px;
    transform: rotate(138deg);
    z-index: -1;
}


.tail-two {
    position: absolute;
    width: 14px;
    border-bottom: 110px solid var(--black);
    border-top: 1px solid transparent;
    border-left: 32px solid transparent;
    border-right: 0;
    top: 96px;
    left: -76px;
    transform: rotate(100deg);
    z-index: -1;
}


.tail-three {
    position: absolute;
    width: 6px;
    border-bottom: 58px solid var(--black);
    border-top: 1px solid transparent;
    border-left: 20px solid transparent;
    border-right: 0;
    top: 160px;
    left: -44px;
    transform: rotate(48deg);
    z-index: -1;
}

.crest {
    position: absolute;
    width: 130px;
    height: 50px;
    border-radius: 9% 60% 10% 20% / 50% 194% 17% 100%;
    background: var(--body);
    left: 140px;
    top: -37px;
    border-right: 10px solid var(--black);
    border-top: 10px solid var(--black);
    transform: rotate(-10deg);
}


.crest:after {
    content: "";
    position: absolute;
    width: 135px;
    height: 56px;
    border-radius: 50% 50% 50% 50%/50% 50% 50% 38%;
    background-color: var(--body);
    left: -25px;
    top: -73px;
    border: 10px solid var(--black);
    transform: rotate(-138deg);
}


.crest:before {
    content: "";
    position: absolute;
    width: 158px;
    height: 45px;
    border-radius: 50%;
    background-color: var(--body);
    left: -84px;
    top: -34px;
    border: 10px solid;
    border-color: var(--black) var(--black) var(--black) transparent;
    transform: rotate(-167deg);
}

.hide-chest-lines {
    position: absolute;
    width: 87px;
    height: 45px;
    top: -11px;
    left: 134px;
    background-color: var(--body);
    z-index: 2;
    transform: rotate(8deg);
}

.hide-chest-lines:after {
    content: "";
    position: absolute;
    width: 67px;
    height: 34px;
    top: -44px;
    left: 53px;
    background-color: var(--body);
    z-index: 2;
    transform: rotate(39deg);
}

@media (max-width: 960px) {
    .eyebrow {
        width: 16px;
        border-top: 78px solid var(--black);
        border-bottom: 1px solid transparent;
        border-left: 8px solid transparent;
    }
    .eyebrow.eyebrow-left {
        top: 52px;
        left: 120px;
    }
    .eyebrow.eyebrow-right {
        top: 50px;
        left: 194px;
    }
    .eye {
        width: 59px;
        height: 52px;
    }
    .eye.eye-left {
        top: 98px;
        left: 104px;
    }
    .eye.eye-right {
        top: 95px;
        left: 169px;
    }
    .eye::after {
        width: 21px;
        height: 21px;
        left: 30px;
        top: 11px;
    }
    .beak-left {
        height: 67px;
        width: 76px;
        top: 137px;
        left: 134px;
    }
    .beak-left::after {
        height: 49px;
        top: 32px;
        left: 28px;
    }
    .beak-right {
        height: 71px;
        width: 76px;
        top: 136px;
        left: 130px;
    }
    .beak-right::after {
        height: 54px;
        top: 28px;
        left: 31px;
    }
    .beak-bottom {
        height: 80px;
        width: 112px;
        top: 90px;
        left: 115px;
    }
    .beak-background-one {
        width: 58px;
        height: 59px;
        top: 143px;
        left: 139px;
    }
    .beak-background-one::after {
        width: 64px;
        height: 71px;
        top: -13px;
        left: 4px;
        border-radius: 0 0 0 200% / 58%;
    }
    .mark-one {
        width: 43px;
        height: 53px;
        top: 113px;
        left: 90px;
    }
    .mark-one::after {
        width: 43px;
        height: 53px;
        top: -23px;
        left: 110px;
    }
    .mark-two {
        width: 23px;
        height: 42px;
        top: 128px;
        left: 62px;
    }
    .mark-three {
        width: 18px;
        height: 24px;
        top: 154px;
        left: 35px;
    }
    .tail-one {
        width: 11px;
        border-bottom: 41px solid var(--black);
        border-top: 1px solid transparent;
        border-left: 14px solid transparent;
        border-right: 0;
        top: 58px;
        left: -22px;
    }
    .tail-two {
        width: 8px;
        border-bottom: 44px solid var(--black);
        border-top: 1px solid transparent;
        border-left: 19px solid transparent;
        border-right: 0;
        top: 69px;
        left: -41px;
    }
    .tail-three {
        width: 6px;
        border-bottom: 35px solid var(--black);
        border-top: 1px solid transparent;
        border-left: 12px solid transparent;
        border-right: 0;
        top: 96px;
        left: -28px;
    }
    .crest {
        width: 78px;
        height: 30px;
        left: 84px;
        top: -22px;
        border-right: 6px solid var(--black);
        border-top: 6px solid var(--black);
    }
    .hide-chest-lines {
        width: 52px;
        height: 27px;
        top: -3px;
        left: 90px;
    }
    .hide-chest-lines:after {
        width: 40px;
        height: 30px;
        top: -24px;
        left: 24px;
    }
    .crest:after {
        width: 81px;
        height: 34px;
        left: -15px;
        top: -44px;
    }
    .crest:before {
        width: 95px;
        height: 27px;
        left: -50px;
        top: -20px;
    }
    .head {
        width: 252px;
        height: 243px;
    }
}

`;