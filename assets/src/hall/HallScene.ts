import { G } from "../G";

const {ccclass, property} = cc._decorator;

@ccclass
export class HallScene extends cc.Component {

    onBtnGobang() {
        G.enterGobang();
    }
}