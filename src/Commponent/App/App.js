import React, { Fragment } from "react";
import style from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import Header from "../Header/Header";
import Section from "../Section/Section";
import Channel from "../Channel/Channel";
import Footer from "../Footer/Footer";
import Social from "../Social/Social";
import NavigationChannel from "../NavigationChannel/NavigationChannel";
import ImgPage from "../ImgPage/ImgPage";
import { useState } from "react";

const Bocks = React.lazy(() => import("../Bocks/Bocks"));
const Videos = React.lazy(() => import("../Video/Videos"));

const AhmedSubai = React.lazy(() => import("../PageVideos/AhmedSubai"));
const AbuOmar = React.lazy(() => import("../PageVideos/AbuOmar"));
const HassanHusseini = React.lazy(() => import("../PageVideos/HassanHusseini"));
const Hitham = React.lazy(() => import("../PageVideos/Hitham"));
const Iiad = React.lazy(() => import("../PageVideos/Iiad"));
const MahmoudDaoud = React.lazy(() => import("../PageVideos/MahmoudDaoud"));
const MohammedShaheen = React.lazy(() =>
  import("../PageVideos/MohammedShaheen")
);
const SamiAmiri = React.lazy(() => import("../PageVideos/SamiAmiri"));
const Saqqara = React.lazy(() => import("../PageVideos/Saqqara"));
const TamerLabban = React.lazy(() => import("../PageVideos/TamerLabban"));

const App = () => {
  const [stateImg, setStateImg] = useState([]);
  const hendllrFuncrion = (src, text) => {
    const dedulsImages = {
      src,
      text,
    };
    setStateImg(dedulsImages);
  };

  return (
    <Fragment>
      <Social />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <Section>
                  <Channel />
                </Section>
                <React.Suspense fallback="Loading Videos...">
                  <Videos />
                </React.Suspense>
                <React.Suspense fallback="Loading Bocks...">
                  <Bocks hendllrFuncrion={hendllrFuncrion} />
                </React.Suspense>
              </Fragment>
            }
          />
          <Route
            path="Videos_AhmedSubai"
            element={
              <Fragment>
                <Header />
                <main className={style.visuals}>
                  <h3 className={style.main_title}>القنوات</h3>
                  <div className={style.box_all}>
                    <NavigationChannel />
                    <React.Suspense fallback="Loading...">
                      <AhmedSubai />
                    </React.Suspense>
                  </div>
                </main>
              </Fragment>
            }
          />
          <Route
            path="Videos_AbuOmar"
            element={
              <Fragment>
                <Header />
                <main className={style.visuals}>
                  <h3 className={style.main_title}>القنوات</h3>
                  <div className={style.box_all}>
                    <NavigationChannel />
                    <React.Suspense fallback="Loading...">
                      <AbuOmar />
                    </React.Suspense>
                  </div>
                </main>
              </Fragment>
            }
          />
          <Route
            path="Videos_HassanHusseini"
            element={
              <Fragment>
                <Header />
                <main className={style.visuals}>
                  <h3 className={style.main_title}>القنوات</h3>
                  <div className={style.box_all}>
                    <NavigationChannel />
                    <React.Suspense fallback="Loading...">
                      <HassanHusseini />
                    </React.Suspense>
                  </div>
                </main>
              </Fragment>
            }
          />
          <Route
            path="Videos_Hitham"
            element={
              <Fragment>
                <Header />
                <main className={style.visuals}>
                  <h3 className={style.main_title}>القنوات</h3>
                  <div className={style.box_all}>
                    <NavigationChannel />
                    <React.Suspense fallback="Loading...">
                      <Hitham />
                    </React.Suspense>
                  </div>
                </main>
              </Fragment>
            }
          />
          <Route
            path="Videos_Iiad"
            element={
              <Fragment>
                <Header />
                <main className={style.visuals}>
                  <h3 className={style.main_title}>القنوات</h3>
                  <div className={style.box_all}>
                    <NavigationChannel />
                    <React.Suspense fallback="Loading...">
                      <Iiad />
                    </React.Suspense>
                  </div>
                </main>
              </Fragment>
            }
          />
          <Route
            path="Videos_MahmoudDaoud"
            element={
              <Fragment>
                <Header />
                <main className={style.visuals}>
                  <h3 className={style.main_title}>القنوات</h3>
                  <div className={style.box_all}>
                    <NavigationChannel />
                    <React.Suspense fallback="Loading...">
                      <MahmoudDaoud />
                    </React.Suspense>
                  </div>
                </main>
              </Fragment>
            }
          />
          <Route
            path="Videos_MohammedShaheen"
            element={
              <Fragment>
                <Header />
                <main className={style.visuals}>
                  <h3 className={style.main_title}>القنوات</h3>
                  <div className={style.box_all}>
                    <NavigationChannel />
                    <React.Suspense fallback="Loading...">
                      <MohammedShaheen />
                    </React.Suspense>
                  </div>
                </main>
              </Fragment>
            }
          />
          <Route
            path="Videos_SamiAmiri"
            element={
              <Fragment>
                <Header />
                <main className={style.visuals}>
                  <h3 className={style.main_title}>القنوات</h3>
                  <div className={style.box_all}>
                    <NavigationChannel />
                    <React.Suspense fallback="Loading...">
                      <SamiAmiri />
                    </React.Suspense>
                  </div>
                </main>
              </Fragment>
            }
          />
          <Route
            path="Videos_Saqqara"
            element={
              <Fragment>
                <Header />
                <main className={style.visuals}>
                  <h3 className={style.main_title}>القنوات</h3>
                  <div className={style.box_all}>
                    <NavigationChannel />
                    <React.Suspense fallback="Loading...">
                      <Saqqara />
                    </React.Suspense>
                  </div>
                </main>
              </Fragment>
            }
          />
          <Route
            path="Videos_TamerLabban"
            element={
              <Fragment>
                <Header />
                <main className={style.visuals}>
                  <h3 className={style.main_title}>القنوات</h3>
                  <div className={style.box_all}>
                    <NavigationChannel />
                    <React.Suspense fallback="Loading...">
                      <TamerLabban />
                    </React.Suspense>
                  </div>
                </main>
              </Fragment>
            }
          />
          <Route path="images" element={<ImgPage stateImg={stateImg} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
};

export default App;
