// import 文を使って sub.js ファイルを読み込む。
import { hello } from "./sub";
import { color } from "./color";
import "./style.scss";
// sub.jsに定義されたJavaScriptを実行する。
hello();
color();
