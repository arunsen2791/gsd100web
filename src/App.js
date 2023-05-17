import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import TermsOfUse from "./wrappers/myPage/TermsOfUse";
import { Component } from "react";
import { history } from "./history";

// home pages
// const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));
//const HomeFashionTwo = lazy(() => import("./pages/home/HomeFashionTwo"));
// const HomeFashionThree = lazy(() => import("./pages/home/HomeFashionThree"));
// const HomeFashionFour = lazy(() => import("./pages/home/HomeFashionFour"));
// const HomeFashionFive = lazy(() => import("./pages/home/HomeFashionFive"));
// const HomeFashionSix = lazy(() => import("./pages/home/HomeFashionSix"));
// const HomeFashionSeven = lazy(() => import("./pages/home/HomeFashionSeven"));
// const HomeFashionEight = lazy(() => import("./pages/home/HomeFashionEight"));
// const HomeKidsFashion = lazy(() => import("./pages/home/HomeKidsFashion"));
// const HomeCosmetics = lazy(() => import("./pages/home/HomeCosmetics"));
// const HomeFurniture = lazy(() => import("./pages/home/HomeFurniture"));
const HomeFurnitureTwo = lazy(() => import("./pages/home/HomeFurnitureTwo"));
// const HomeFurnitureThree = lazy(() =>
//   import("./pages/home/HomeFurnitureThree")
// );
const HomeFurnitureFour = lazy(() => import("./pages/home/HomeFurnitureFour"));
// const HomeFurnitureFive = lazy(() => import("./pages/home/HomeFurnitureFive"));
// const HomeFurnitureSix = lazy(() => import("./pages/home/HomeFurnitureSix"));
// const HomeFurnitureSeven = lazy(() =>
//   import("./pages/home/HomeFurnitureSeven")
// );
// const HomeElectronics = lazy(() => import("./pages/home/HomeElectronics"));
// const HomeElectronicsTwo = lazy(() =>
//   import("./pages/home/HomeElectronicsTwo")
// );
// const HomeElectronicsThree = lazy(() =>
//   import("./pages/home/HomeElectronicsThree")
// );
// const HomeBookStore = lazy(() => import("./pages/home/HomeBookStore"));
// const HomeBookStoreTwo = lazy(() => import("./pages/home/HomeBookStoreTwo"));
// const HomePlants = lazy(() => import("./pages/home/HomePlants"));
// const HomeFlowerShop = lazy(() => import("./pages/home/HomeFlowerShop"));
// const HomeFlowerShopTwo = lazy(() => import("./pages/home/HomeFlowerShopTwo"));
// const HomeOrganicFood = lazy(() => import("./pages/home/HomeOrganicFood"));
// const HomeOrganicFoodTwo = lazy(() =>
//   import("./pages/home/HomeOrganicFoodTwo")
// );
// const HomeOnepageScroll = lazy(() => import("./pages/home/HomeOnepageScroll"));
// const HomeGridBanner = lazy(() => import("./pages/home/HomeGridBanner"));
// const HomeAutoParts = lazy(() => import("./pages/home/HomeAutoParts"));
// const HomeCakeShop = lazy(() => import("./pages/home/HomeCakeShop"));
// const HomeHandmade = lazy(() => import("./pages/home/HomeHandmade"));
// const HomePetFood = lazy(() => import("./pages/home/HomePetFood"));
// const HomeMedicalEquipment = lazy(() =>
//   import("./pages/home/HomeMedicalEquipment")
// );
// const HomeChristmas = lazy(() => import("./pages/home/HomeChristmas"));
// const HomeBlackFriday = lazy(() => import("./pages/home/HomeBlackFriday"));
// const HomeBlackFridayTwo = lazy(() =>
//   import("./pages/home/HomeBlackFridayTwo")
// );
// const HomeValentinesDay = lazy(() => import("./pages/home/HomeValentinesDay"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const ShopGridTwoColumn = lazy(() => import("./pages/shop/ShopGridTwoColumn"));
const ShopGridMenColumn = lazy(() => import("./pages/shop/ShopGridMenColumn"));
const ShopGridWomenColumn = lazy(() =>
  import("./pages/shop/ShopGridWomenColumn")
);
const ShopGridKidsColumn = lazy(() =>
  import("./pages/shop/ShopGridKidsColumn")
);
const ShopGridNoSidebar = lazy(() => import("./pages/shop/ShopGridNoSidebar"));
const ShopGridFullWidth = lazy(() => import("./pages/shop/ShopGridFullWidth"));
const ShopGridRightSidebar = lazy(() =>
  import("./pages/shop/ShopGridRightSidebar")
);
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("./pages/shop/ShopListFullWidth"));
const ShopListTwoColumn = lazy(() => import("./pages/shop/ShopListTwoColumn"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const faqPage = lazy(() => import("./wrappers/myPage/FaqPage"));
const privacyPolicy = lazy(() => import("./wrappers/myPage/privacyPolicy"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const ForgotPassword = lazy(() => import("./pages/other/ForgotPassword"));
const PinForgotpass = lazy(() => import("./pages/other/PinForgotpass"));
const Step = lazy(() => import("./pages/other/Step"));
const Phone = lazy(() => import("./pages/other/Phone"));
const Otp = lazy(() => import("./pages/other/Otp"));

const Cart = lazy(() => import("./pages/other/Cart"));
const MyOrder = lazy(() => import("./pages/other/MyOrder"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

// GSD pages
const Coaching = lazy(() => import("./components/gsdpages/Coaching"));
const Cap = lazy(() => import("./components/gsdpages/Cap"));
const BusinessCoaching = lazy(() => import("./components/gsdpages/BusinessCoaching"));
const HealthCoaching = lazy(() =>
  import("./components/gsdpages/HealthCoaching")
);
const LifeCoaching = lazy(() =>
  import("./components/gsdpages/LifeCoaching")
);


// agricoinpages

const DthBill = lazy(() => import("./components/agricoinpage/dthBill.js"));
const Electricity = lazy(() =>
  import("./components/agricoinpage/Electricity.js")
);
const Gass = lazy(() => import("./components/agricoinpage/gass.js"));
const Internet = lazy(() => import("./components/agricoinpage/Internet.js"));
const Water = lazy(() => import("./components/agricoinpage/Water.js"));
const shoppingBill = lazy(() =>
  import("./components/agricoinpage/shoppingBill.js")
);
const Wallet = lazy(() => import("./components/agricoinpage/wallet.js"));
const TableHistory = lazy(() =>
  import("./components/agricoinpage/TableHistory.js")
);
const Dashboard = lazy(() => import("./components/agricoinpage/Dashboard.js"));
const ServiceAgri = lazy(() =>
  import("./components/agricoinpage/ServiceAgricoin.js")
);
const SoxiService = lazy(() =>
  import("./components/agricoinpage/SoxiService.js")
);
const MobileRecharge = lazy(() =>
  import("./components/agricoinpage/MobileRecharge")
);
const WalletHeader = lazy(() =>
  import("./components/agricoinpage/WalletHeader.js")
);
const OrderRecharge = lazy(() =>
  import("./components/agricoinpage/OrderRecharge.js")
);
const DepositForm = lazy(() =>
  import("./components/agricoinpage/DepositForm.js")
);
const WalletWithdraw = lazy(() =>
  import("./components/agricoinpage/WalletWithdraw.js")
);
const HomeCategory = lazy(() =>
  import("./components/agricoinpage/HomeCategory.js")
);

const HideShowDiv = lazy(() =>
  import("./components/agricoinpage/HideShowDiv.js")
);
const SoxyPayTab = lazy(() =>
  import("./components/agricoinpage/SoxyPayTab.js")
);
const DepositList = lazy(() =>
  import("./components/agricoinpage/DepositList.js")
);
const DepositPending = lazy(() =>
  import("./components/agricoinpage/DepositPending.js")
);
const ComingSoon = lazy(() =>
  import("./components/agricoinpage/ComingSoon.js")
);

const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json"),
        },
      })
    );
  });

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router history={history}>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <HashRouter>
                <Switch>
                  <Route
                    exact
                    path={process.env.PUBLIC_URL + "/"}
                    component={HomeFurnitureFour}
                  />

                  <Route
                    exact
                    path={process.env.PUBLIC_URL + "/"}
                    component={HomeFurnitureTwo}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/home-furniture-four"}
                    component={HomeFurnitureFour}
                  />

                  {/* agriconpagesroute */}

                  <Route
                    path={process.env.PUBLIC_URL + "/dthbill"}
                    component={DthBill}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/coaching"}
                    component={Coaching}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/cap"}
                    component={Cap}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/healthcoaching"}
                    component={HealthCoaching}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/lifecoaching"}
                    component={LifeCoaching}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/businesscoaching"}
                    component={BusinessCoaching}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/shoppingbill"}
                    component={shoppingBill}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/electricity"}
                    component={Electricity}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/internet"}
                    component={Internet}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/gass"}
                    component={Gass}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/water"}
                    component={Water}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/tablehistory"}
                    component={TableHistory}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/dashboard"}
                    component={Dashboard}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/serviceagri"}
                    component={ServiceAgri}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/soxiservice"}
                    component={SoxiService}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/mobilerecharge"}
                    component={MobileRecharge}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/orderrecharge"}
                    component={OrderRecharge}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/depositform"}
                    component={DepositForm}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/walletwithdraw"}
                    component={WalletWithdraw}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/walletheader"}
                    component={WalletHeader}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/wallet"}
                    component={Wallet}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/homecategory"}
                    component={HomeCategory}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/HideShowDiv"}
                    component={HideShowDiv}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/SoxyPayTab"}
                    component={SoxyPayTab}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/DepositList"}
                    component={DepositList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/DepositPending"}
                    component={DepositPending}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/ComingSoon"}
                    component={ComingSoon}
                  />

                  {/* Shop pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-standard"}
                    component={ShopGridStandard}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-filter"}
                    component={ShopGridFilter}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-two-column"}
                    component={ShopGridTwoColumn}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-men-column"}
                    component={ShopGridMenColumn}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-women-column"}
                    component={ShopGridWomenColumn}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-kids-column"}
                    component={ShopGridKidsColumn}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}
                    component={ShopGridNoSidebar}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-full-width"}
                    component={ShopGridFullWidth}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
                    component={ShopGridRightSidebar}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-list-standard/:_id"}
                    render={(routeProps) => (
                      <Product
                        {...routeProps}
                        key={routeProps.match.params._id}
                      />
                    )}
                    component={ShopListStandard}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-list-full-width"}
                    component={ShopListFullWidth}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-list-two-column"}
                    component={ShopListTwoColumn}
                  />

                  {/* Shop product pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/product/:id"}
                    render={(routeProps) => (
                      <Product
                        {...routeProps}
                        key={routeProps.match.params.id}
                      />
                    )}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
                    component={ProductTabLeft}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
                    component={ProductTabRight}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/product-sticky/:id"}
                    component={ProductSticky}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/product-slider/:id"}
                    component={ProductSlider}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
                    component={ProductFixedImage}
                  />

                  {/* Blog pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/blog-standard"}
                    component={BlogStandard}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                    component={BlogNoSidebar}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/blog-right-sidebar"}
                    component={BlogRightSidebar}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/blog-details-standard"}
                    component={BlogDetailsStandard}
                  />

                  {/* Other pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/about"}
                    component={About}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/contact"}
                    component={Contact}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/faqPage"}
                    component={faqPage}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/privacyPolicy"}
                    component={privacyPolicy}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/TermsOfUse"}
                    component={TermsOfUse}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/login-register"}
                    component={LoginRegister}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/ForgotPassword"}
                    component={ForgotPassword}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/PinForgotpass"}
                    component={PinForgotpass}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/step"}
                    component={Step}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/Phone"}
                    component={Phone}
                  />
                  {/* <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={Cart}
                /> */}
                  <Route
                    path={process.env.PUBLIC_URL + "/Otp"}
                    component={Otp}
                  />
                  <Route
                    render={() =>
                      localStorage.getItem("auth-token") ? (
                        <>
                          <Route
                            path={process.env.PUBLIC_URL + "/cart"}
                            component={Cart}
                          />
                          <Route
                            path={process.env.PUBLIC_URL + "/myOrder"}
                            component={MyOrder}
                          />
                          <Route
                            path={process.env.PUBLIC_URL + "/wishlist"}
                            component={Wishlist}
                          />
                          <Route
                            path={process.env.PUBLIC_URL + "/checkout"}
                            component={Checkout}
                          />
                          <Route
                            path={process.env.PUBLIC_URL + "/my-account"}
                            component={MyAccount}
                          />
                        </>
                      ) : (
                        <Redirect
                          to={process.env.PUBLIC_URL + "/login-register"}
                        />
                      )
                    }
                  />
                  {/* <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                /> */}
                  <Route
                    path={process.env.PUBLIC_URL + "/compare"}
                    component={Compare}
                  />
                  {/* <Route
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={Checkout}
                /> */}

                  <Route
                    path={process.env.PUBLIC_URL + "/not-found"}
                    component={NotFound}
                  />

                  <Route exact component={NotFound} />
                </Switch>
              </HashRouter>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
