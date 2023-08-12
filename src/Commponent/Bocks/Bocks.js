import React, { Fragment, useState } from "react";
import style from "./Bocks.module.css";
import Container from "../Container/Container";
import appStyle from "../App/App.module.css";
import BockChild from "../BockChild/BockChild";
import LangwBocks from "../langwBocks/langwBocks";
import FilterBocks from "../FilterBock/FilterBock";
import actived from "../functionalty/functionalty";

// All
import image1 from "./images/image-bock/download.jpg";
import image2 from "./images/image-bock/back5.jpg";
import image3 from "./images/image-bock/back2.jpg";
import image4 from "./images/image-bock/id-2.jpeg";
import image5 from "./images/image-bock/back3.jpg";
import image6 from "./images/image-bock/id-18.jpeg";
import image7 from "./images/image-bock/id-3.jpeg";
import image8 from "./images/image-bock/id-4.jpg";
import image9 from "./images/image-bock/id-5.jpeg";
import image10 from "./images/image-bock/id-6.jpeg";
import image11 from "./images/image-bock/id-7.jpeg";
import image12 from "./images/image-bock/id-8.jpeg";
import image13 from "./images/image-bock/id-9.jpeg";
import image14 from "./images/image-bock/id-10.jpeg";
import image15 from "./images/image-bock/id-11.jpeg";
import image16 from "./images/image-bock/id-12.jpeg";
import image17 from "./images/image-bock/id-14.jpeg";
import image18 from "./images/image-bock/id-16.jpeg";
import image19 from "./images/image-bock/id-17.jpeg";
import image20 from "./images/image-bock/id-1.jpeg";
// Alhadu
import alhadu1 from "./images/image-bock/back5.jpg";
import alhadu2 from "./images/image-bock/id-2.jpeg";
import alhadu3 from "./images/image-bock/id-3.jpeg";
import alhadu4 from "./images/image-bock/id-5.jpeg";
import alhadu5 from "./images/image-bock/id-6.jpeg";
import alhadu6 from "./images/image-bock/id-10.jpeg";
import alhadu7 from "./images/image-bock/id-11.jpeg";
import alhadu8 from "./images/image-bock/id-12.jpeg";
import alhadu9 from "./images/image-bock/id-1.jpeg";
// Eman
import eman1 from "./images/image-bock/id-4.jpg";
import eman2 from "./images/image-bock/id-8.jpeg";
import eman3 from "./images/image-bock/id-9.jpeg";
import eman4 from "./images/image-bock/id-16.jpeg";
import eman5 from "./images/image-bock/id-17.jpeg";
//
import cover1 from "./images/image-bock/id-14.jpeg";
import cover2 from "./images/image-bock/id-7.jpeg";
import cover3 from "./images/image-bock/id-18.jpeg";
import cover4 from "./images/image-bock/back3.jpg";
// Langu
import ordw from "./images/image-bock/ordw.png";
import almany1 from "./images/image-bock/almany.png";
import almany2 from "./images/image-bock/almany2.png";
import asbany from "./images/image-bock/asbany.png";

import englsh1 from "./images/image-bock/englsh1.png";
import englsh2 from "./images/image-bock/englsh2.png";
import englsh3 from "./images/image-bock/englsh3.png";
import englsh4 from "./images/image-bock/englsh4.png";
import englsh5 from "./images/image-bock/englsh5.png";
import brtghaly from "./images/image-bock/brtghaly.png";
import bshtw from "./images/image-bock/bshtw.png";
import rwsy from "./images/image-bock/rwsy.png";
import rwmany from "./images/image-bock/rwmany.png";
import snhaly from "./images/image-bock/snhaly.png";
import pharsy from "./images/image-bock/pharsy.png";
import pplbiny from "./images/image-bock/pplbiny.png";
import phdnamy from "./images/image-bock/phdnamy.png";

actived(document.querySelectorAll(".uls_filter li"));
actived(document.querySelectorAll(".urlLangw li"));

const Bocks = ({ hendllrFuncrion }) => {
  console.log("Bocks");
  const [state] = useState({
    download: "تحميل الكتاب",
    iconDownload: "fa-solid fa-download fa-fw",
    classname: "bock",
    arbic: {
      all: [
        {
          url: image1,
          title: "المثلية الجنسية (الجريمة والعقاب)",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_01/ar-alshozoz.pdf",
        },
        {
          url: image2,
          title: "المرأة بين الأسلام و الإلحاد",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-women-between-islam-and-atheism.pdf",
        },
        {
          url: image3,
          title: "الوسواس القهري",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-warkat-ela-kol-mobtla.pdf",
        },
        {
          url: image4,
          title: "عيادة الملحدين",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-eiadat-almulhidin.pdf",
        },
        {
          url: image5,
          title: "منكروٌ السنة",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single9/ar-monqro-alsunnah.pdf",
        },
        {
          url: image6,
          title: "الهندوسية",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-hinduism.pdf",
        },
        {
          url: image7,
          title: "الإسلام والإلحاد وجها لوجه",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-atheism-and-islam.pdf",
        },
        {
          url: image8,
          title: "رسول الأميين",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single9/ar-rasul-alumiyiyn.pdf",
        },
        {
          url: image9,
          title: "كبسولات إسكات الملحدين",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-kabsulat-iiskat-almulhidin.pdf",
        },
        {
          url: image10,
          title: "40 خطأ في نظرية التطور",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-khata-fi-nazariat-altatawur.pdf",
        },
        {
          url: image11,
          title: "حوار حقيقي مع متنصرة - خفايا وأسرار",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-7war-haqeqy.pdf",
        },
        {
          url: image12,
          title: "إما الإيمان وإما الفوضي",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-aleman-wa-elfawda.pdf",
        },
        {
          url: image13,
          title: "منهج مناعة إيمانية",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-man3ah-emaniah.pdf",
        },
        {
          url: image14,
          title: "الإلحاد يسمم كل شيئ",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_02/ar-aliilhad-yusamim-kol-shayy.pdf",
        },
        {
          url: image15,
          title: "الرد على الملحدين العرب",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_02/ar-mwswet-alrd-ela-almlhdayn-alearab.pdf",
        },
        {
          url: image16,
          title: "كهنة الإلحاد الجديد",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_02/ar-kahnat-aliilhad.pdf",
        },
        {
          url: image17,
          title:
            "كيف تدعو إلى الإسلام (ملحدًا - بوذيًّا - هندوسيًّا - كتابيًّا)؟",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-kayf-tad3o.pdf",
        },
        {
          url: image18,
          title: "العودة إلى الإيمان",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-aleawdat-iilaa-al-iiman.pdf",
        },
        {
          url: image19,
          title: "شفاء لما في الصدور",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-shifaa.pdf",
        },
        {
          url: image20,
          title: "الإلحاد الروحي وخطره على العقيدة والعقل",
          src_link:
            "https://ia903408.us.archive.org/34/items/doctrine07001/doctrine07671.pdf",
        },
      ],
      alhadu: [
        {
          url: alhadu1,
          title: "المرأة بين الأسلام و الإلحاد",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-women-between-islam-and-atheism.pdf",
        },
        {
          url: alhadu2,
          title: "عيادة الملحدين",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-eiadat-almulhidin.pdf",
        },
        {
          url: alhadu3,
          title: "الإسلام والإلحاد وجها لوجه",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-atheism-and-islam.pdf",
        },
        {
          url: alhadu4,
          title: "كبسولات إسكات الملحدين",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-kabsulat-iiskat-almulhidin.pdf",
        },
        {
          url: alhadu5,
          title: "40 خطأ في نظرية التطور",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-khata-fi-nazariat-altatawur.pdf",
        },
        {
          url: alhadu6,
          title: "الإلحاد يسمم كل شيئ",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_02/ar-aliilhad-yusamim-kol-shayy.pdf",
        },
        {
          url: alhadu7,
          title: "الرد على الملحدين العرب",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_02/ar-mwswet-alrd-ela-almlhdayn-alearab.pdf",
        },
        {
          url: alhadu8,
          title: "كهنة الإلحاد الجديد",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_02/ar-kahnat-aliilhad.pdf",
        },
        {
          url: alhadu9,
          title: "الإلحاد الروحي وخطره على العقيدة والعقل",
          src_link:
            "https://ia903408.us.archive.org/34/items/doctrine07001/doctrine07671.pdf",
        },
      ],
      eman: [
        {
          url: eman1,
          title: "رسول الأميين",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single9/ar-rasul-alumiyiyn.pdf",
        },
        {
          url: eman2,
          title: "إما الإيمان وإما الفوضي",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-aleman-wa-elfawda.pdf",
        },
        {
          url: eman3,
          title: "منهج مناعة إيمانية",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-man3ah-emaniah.pdf",
        },
        {
          url: eman4,
          title: "العودة إلى الإيمان",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-aleawdat-iilaa-al-iiman.pdf",
        },
        {
          url: eman5,
          title: "شفاء لما في الصدور",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-shifaa.pdf",
        },
      ],
      cover: [
        {
          url: cover1,
          title:
            "كيف تدعو إلى الإسلام (ملحدًا - بوذيًّا - هندوسيًّا - كتابيًّا)؟",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-kayf-tad3o.pdf",
        },
        {
          url: cover2,
          title: "حوار حقيقي مع متنصرة - خفايا وأسرار",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-7war-haqeqy.pdf",
        },
        {
          url: cover3,
          title: "الهندوسية",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single_010/ar-hinduism.pdf",
        },
        {
          url: cover4,
          title: "منكروٌ السنة",
          src_link:
            "https://d1.islamhouse.com/data/ar/ih_books/single9/ar-monqro-alsunnah.pdf",
        },
      ],
    },
    ordw: {
      all: [
        {
          url: ordw,
          title: "الهندوسية في ميزان تعاليمها الأصلية والعقل والفطرة السليمة",
          src_link:
            "https://d1.islamhouse.com/data/ur/ih_books/single2/ur-hinduism.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    almany: {
      all: [
        {
          url: almany1,
          title: "الإسلام والإلحاد وجها لوجه",
          src_link:
            "https://d1.islamhouse.com/data/de/ih_books/single/de-islam-und-atheismus-von-angesicht-zu-angesicht.pdf",
        },
        {
          url: almany2,
          title: "لماذا خلق الله الشر؟",
          src_link:
            "https://d1.islamhouse.com/data/de/ih_articles/single/de-wieso-hat-allah-das-ubel-erschaffen.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    asbany: {
      all: [
        {
          url: asbany,
          title: "الإسلام والإلحاد وجها لوجه - إسباني",
          src_link:
            "https://d1.islamhouse.com/data/es/ih_books/single/es-islam-vs-ateismo.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    englsh: {
      all: [
        {
          url: englsh1,
          title:
            "الهندوسية في ميزان تعاليمها الأصلية والعقل والفطرة السليمة - إنجليزي",
          src_link:
            "https://d1.islamhouse.com/data/en/ih_books/single3/en-hinduism-question-and-answer.pdf",
        },
        {
          url: englsh2,
          title: "الإلحاد الروحي وخطره على العقيدة والعقل - إنجليزي",
          src_link:
            "https://d1.islamhouse.com/data/en/ih_books/single3/en-spiritual-atheism.pdf",
        },
        {
          url: englsh3,
          title: "الإسلام والإلحاد وجها لوجه - إنجليزي",
          src_link:
            "https://d1.islamhouse.com/data/en/ih_books/single3/en-islam-vs-atheism.pdf",
        },
        {
          url: englsh4,
          title: "الرسول الأخير - إنجليزي",
          src_link:
            "https://d1.islamhouse.com/data/en/ih_books/single3/en-last-prophet.pdf",
        },
        {
          url: englsh5,
          title: "الملاحدة لصوص الآخرة - إنجليزي",
          src_link:
            "https://d1.islamhouse.com/data/en/ih_books/single3/en-atheists-thieves-of-the-hereafter.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    brtghaly: {
      all: [
        {
          url: brtghaly,
          title:
            "الهندوسية في ميزان تعاليمها الأصلية والعقل والفطرة السليمة - برتغالي",
          src_link:
            "https://d1.islamhouse.com/data/pt/ih_books/single/pt-alhindosia-fi-mizan.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    bshtw: {
      all: [
        {
          url: bshtw,
          title: "الإسلام والإلحاد وجها لوجه - بشتو",
          src_link:
            "https://d1.islamhouse.com/data/ps/ih_books/single/ps-atheism-and-islam.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    rwsy: {
      all: [
        {
          url: rwsy,
          title: "الإسلام والإلحاد وجها لوجه - روسي",
          src_link:
            "https://d1.islamhouse.com/data/ru/ih_books/single/ru-islam-and-atheism.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    rwmany: {
      all: [
        {
          url: rwmany,
          title: "الإسلام والإلحاد وجها لوجه - روماني",
          src_link:
            "https://d1.islamhouse.com/data/ro/ih_books/single/ro-islamului-si-ateismulu.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    snhaly: {
      all: [
        {
          url: snhaly,
          title: "الإسلام والإلحاد وجها لوجه - سنهالي",
          src_link:
            "https://d1.islamhouse.com/data/si/ih_books/single/si-atheism-and-islam.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    pharsy: {
      all: [
        {
          url: pharsy,
          title: "الإسلام والإلحاد وجها لوجه - فارسي دري",
          src_link:
            "https://d1.islamhouse.com/data/prs/ih_books/single/prs-atheism-and-islam.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    phrnsy: {
      all: [
        {
          url: "images/image-bock/phrnsy.png",
          title: "الرسول الأخير - فرنسي",
          src_link:
            "https://d1.islamhouse.com/data/fr/ih_books/single/fr-le-dernier-messager.pdf",
        },
        {
          url: "images/image-bock/phrnsy2.png",
          title: "الملاحدة لصوص الآخرة - فرنسي",
          src_link:
            "https://d1.islamhouse.com/data/fr/ih_books/single/fr-athees-les-voleurs-de-lau-dela.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    pplbiny: {
      all: [
        {
          url: pplbiny,
          title: "الإسلام والإلحاد وجها لوجه - فلبيني تجالوج",
          src_link:
            "https://d1.islamhouse.com/data/tl/ih_books/single/tl-islam-at-sa-ateismo.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
    phdnamy: {
      all: [
        {
          url: phdnamy,
          title: "الإسلام والإلحاد وجها لوجه - فيتنامي",
          src_link:
            "https://d1.islamhouse.com/data/vi/ih_books/single/vi-islam-va-thuyet-vo-than.pdf",
        },
      ],
      alhadu: [],
      eman: [],
      cover: [],
    },
  });

  const [idBock, setIdBock] = useState("all");
  // Function Get Id In Bock And Set In State
  const filtritionBocks = (event) => setIdBock(event);

  const [check, setCheck] = useState(false);

  const [langwId, setLangwId] = useState("arbic");

  const filterLangwId = (event) => setLangwId(event);

  return (
    <Fragment>
      <article class={style.articles} id={style.bock}>
        <h2 class={appStyle.main_title}>الكتب</h2>
        <Container>
          <div class={style.parent}>
            <LangwBocks
              filterLangwId={filterLangwId}
              setLangwId={setLangwId}
              check={check}
              setCheck={setCheck}
              setIdBock={setIdBock}
            />
            <FilterBocks filtritionBocks={filtritionBocks} />
          </div>

          <div className={style.bocks}>
            {state[langwId][idBock].map((boak) => {
              return (
                <BockChild
                  hendllrFuncrion={hendllrFuncrion}
                  src={boak.url}
                  paragraph={boak.title}
                  link={boak.src_link}
                  icon={state.iconDownload}
                  text={state.download}
                />
              );
            })}
          </div>
        </Container>
      </article>
    </Fragment>
  );
};

export default Bocks;
