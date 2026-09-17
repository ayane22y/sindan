'use strict';

console.log("二つ目のファイルです");

//質問を作る

const questions = [
    {
        text: "まず、今日の気分は？",
        answers: [
            {
                text: "A:可愛くなりたい", //文字横ハート挿入
                value: "A"
            },
            {
                text: "B:おしゃれに決めたい", //文字横ダイヤ挿入
                value: "B"
            },
            {
                text: "C:楽しく働きたい" ,//文字横音符挿入
                value: "C"
            }
        ]
    },

    {
                text:"こんな服を選ぶなら？",
                answers: [
                 {
                   text:"A:スカートやワンピース", //文字横ハート
                   value:"A",
                 },
                 {
                   text:"B:パンツやセットアップ", //文字横ダイヤ
                   value:"B"
                 },
                 {
                   text:"C:ちょっと変わった服に挑戦！",
                   value:"C"
                 }
               ] 
            },
            {
                  text:"どのコーデが一番好き？",
                  answers: [
                    { 
                       text:"A:リボンやレースがいっぱい", //文字横ハート
                       value:"A"
                    },
                    {
                       text:"B:シンプルだけどおしゃれ", //文字横ダイヤ挿入
                       value:"B"
                    },
                    {
                       text:"C:個性的で目を引く！", 
                       value:"C"
                    }
                  ]
                }

         ];

//診断結果

const results ={

    AAA: {
        icon:"fa-solid fa-ribbon", //リボンのマーク挿入
        name:"ガーリー",
        description:"甘くて可愛い女の子らしいスタイル" //文字横ハート
    },

    AAB: {
        icon:"", //バレエシューズ挿入
        name:"バレエコア",
        description:"リボンや淡いカラーなどのバレリーナのような雰囲気" //ハート挿入
    },

    AAC: {
        icon:"", //王冠マーク
        name:"アイドル衣装",
        description:"華やかでキラキラしたステージ映えするスタイル"
    },

    ABA: {
        icon:"", //リボン挿入
        name:"量産",
        description:"可愛くて甘い王道の女の子らしいファッション" //ハート
    },

    ABB: {
        icon:"", //お花マーク
        name:"フェミニン",
        description:"上品で女性らしい、大人可愛いスタイル"
    },

    ABC: {
        icon:"", //黒のハート
        name:"地雷",
        description:"可愛さとダークさを組み合わせた個性的なスタイルが好き！"
    },

    ACA: {
        icon:"", //リボンマーク
        name:"ロリータ",
        description:"レースやリボンなど世界観のあるかわいい服が好き" //ハート
    },

    ACB: {
        icon:"", //ダイヤのマーク
        name:"ワンホン",
        description:"華やかで洗練された大人っぽいスタイル" //ハート
    },

    ACC: {
        icon:"", //黒のハート
        name:"ドレス",
        description:"特別感のある華やかなファッション！"
    },

    BAA: {
        icon:"", //黒のハート
        name:"ゴスロリ",
        description:"黒を基調とした幻想的で個性的な世界観"
    },

    BAB: {
        icon:"", //時計のマーク
        name:"レトロ",
        description:"昔っぽさを感じるクラシカルなファッション"

    },

    BAC: {
        icon:"", //洋服のマーク
        name:"古着",
        description:"人と違う一点物や味のある服"
    },

    BBA: {
        icon:"", //本のマーク
        name:"トラッド",
        description:"チェックやシャツなどきちんとした服装"
    },

    BBB: {
        icon:"", //白いハート
        name:"シンプル",
        description:"シンプルだけど洗練されたファッション"
    },

    BBC: {
        icon:"", //茶色のコート
        name:"メンズライク",
        description:"パンツやジャケットなどかっこいい服"
    },

    BCA: {
        icon:"" ,//黒のハート
        name:"モード",
        description:"スタイリッシュで個性的なファッション"
    },

    BCB: {
        icon:"", //バッグ
        name:"オフィスカジュアル",
        description:"きれいめで大人っぽい服装"
    },

    BCC: {
        icon:"", //雷
        name:"エレクトリック",
        description:"近未来的で目を引くファッション！"
    },

    CAA: {
        icon:"", //葉っぱ
        name:"ナチュラル",
        description:"自然体でリラックスしたファッション"
    },

    CAB: {
        icon:"", //ダンスマーク
        name:"ダンス",
        description:"動きやすくて可愛いダンス系ファッション"
    },

    CAC: {
        icon:"" ,//ミラーボール
        name:"Y2K",
        description:"2000年代っぽいポップで個性的なスタイル"
    },

    CBA: {
        icon:"", //キャンプ
        name:"アウトドア",
        description:"機能的で動きやすいアウトドアファッション"
    },

    CBB: {
        icon:"", //スニーカー
        name:"カジュアル",
        description:"気軽に着られて毎日楽しめる服装"
    },

    CBC: {
        icon:"", //スポーツ
        name:"スポーティー",
        description:"スニーカーやスポーツウェアなどアクティブな服"
    },

    CCA: {
        icon:"", //秋
        name:"オータム",
        description:"ニットやジャケットなど秋らしい服"
    },

    CCB: {
        icon:"", //韓国
        name:"韓国系",
        description:"韓国っぽいトレンド感のあるスタイル"
    },

    CCC: {
        icon:"", //スケボー
        name:"ストリート",
        description:"オーバーサイズなど自由でかっこいい服装"
    }



};


//現在の状態の確認

let currentQuestion = 0;

let answers = "";

//質問を表示する関数

function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("progress").textContent =
      "Q" + (currentQuestion + 1) + " / 3";

    document.getElementById("question-text").textContent =question.text;

    const answerArea = document.getElementById("answers");

    answerArea.innerHTML = "";

    question.answers.forEach(function(answer){

    const button = document.createElement("button");
    
    button.className ="answer-button";

    button.textContent =answer.text; //answer

    button.onclick =function() {

    //答えを保存する
    answers += answer.value;

    //次の質問へ進む
    currentQuestion++;

    if  (currentQuestion < questions.length){

        showQuestion();

    } else {

        showResult();
    }

    };

    answerArea.appendChild(button);

    }); 


    }

    //結果を表示する

    function showResult() {
    //診断画面を隠す
        document.getElementById("quiz")
        .classList.add("hidden");
    //結果画面を表示
        document.getElementById("result")
        .classList.remove("hidden");
    //答えから結果を探す
        const result =results[answers];
    //結果のアイコン
    const resultIcon =document.getElementById("result-icon");

    resultIcon.innerHTML = `<i class="${result.icon}"></i>`;
    //結果の名前
         document.getElementById("result-name")
         .textContent = result.name;
    //結果の説明
         document.getElementById("result-description")
         .textContent = result.description;
    //女の子の画像を変更
    const girlImage = document.getElementById("girl-image");

    girlImage.src = "images/" + answers + ".png";

    }

    //初めの画面からやり直す

    function restartQuiz() {
    
        currentQuestion = 0;

        answers = "";

        document.getElementById("result")
        .classList.add("hidden");

        document.getElementById("quiz")
        .classList.remove("hidden");


        //パジャマ画像に戻す
        document.getElementById().src =
            "images/oyouhuku.png";

        //Q1表示
        showQuestion();

    }

    //最初の質問を表示

    showQuestion();

    //画像操作


