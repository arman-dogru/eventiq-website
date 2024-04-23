import { React, useState } from "react";
import { Link } from "react-router-dom";
import SignupFormModal from "./SignupFormModal";
import "../components/Footer.css";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="Footer-Section">
      <div className="Footer-top">
        <div className="Footer-Subscribe">
          <h4>Get updates</h4>
          <p>Drop us your email to learn what’s next.</p>
          <div className="Subscribe-input">
            <input type="text" name="Email" placeholder="Email"></input>
            <button>
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
        <div className="Footer-Heading"></div>
      </div>

      <div className="Footer-Mid">
        <table>
          <tbody>
            <tr>

              <td><Link to="/team">About Us </Link></td>



              <td><Link to="/blogs">News & Blogs</Link></td>



              <td><Link to="/contact">Contact Us</Link></td>


              <td onClick={() => setShowSignup(!showSignup)}> Register </td>

            </tr>
          </tbody>
        </table>
        <div className="Footer-bottom">
          {/* <div>
            <h4>Have questions?</h4>
            <button>Contact Us</button>
          </div> */}
        </div>
      </div>

      <div className="Footer-note">
        <div>
          <div className="Social-links">
            <a href="https://twitter.com/">
              <img
                alt="X"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACcUlEQVR4nO2VT0hUURTGnxURkRRtgogggiAI2rRoJ9EqatFmdg33fPfed999b0ADMWRaDNHK3IjSQoJkXI2NLUwCW2TMyhYz0MJwI9K/TUyKGtpMU3PiPhREbNTRpT94m/fO+757vvvP8w7YDUQ0CoA3PlrrRaXUmUb/JRKJowDeAviRTCYv/bfQCRljlrXWnMvleGRkhI0xHEXRmwb6LQCGAVSllDe27UJKedeNfGxsjB0TExPrndBW9QAeA6gDuOftlDAMR5VSPDc3x/V6nXt6etj3/V/JZPL8psGQMyeitLcbjDEnrbXldDrN1WqVy+Wyi4lTqdR7F8nayNuIqEJEz71mEELclFLGc+EoFArrUd1XSl0GsADgnZtgr1mCIHjmTGZmZmKTvr4+Vkr9JqLPRPRRCHHK2wvGmOPW2q9dXV28urrKS0tL3NHRwdbamjHmorcfCCGuSynrQ0NDcRelUimOyhjzyNsvgiB44kSLxWJsMjg46Ez+Simv7YuBEMJaa7m9vT2OaWVlhTs7O11Un4QQx/YkDuAWEdWI6IVSqjYwMBB3MT09zW4BWGv7mxaXUl4hokUArzOZzBHf9x+6qKampmKTbDbLa7u4rRnxswC+AChFUXTCvctkMoeiKCqmUimen5/nSqXC3d3dHATBdyll627EW4noA4BvWutzG79prS9orSu9vb3xMTI7O+v2BodhOLwj8UQicRjAKyJaBnB1qxrf9yMX1eTkZBxVPp+Pl66U8va2BgCeAvgD4E6DspYwDAtBENTHx8fjk9f3fbc3FpRSpxuJP1i7aMKdzJHW+ufmCwrAy227OMDbwD/M8YOsRRJ8mAAAAABJRU5ErkJggg=="
              />
            </a>
            <a href="https://www.instagram.com/envtiq/">
              <img
                alt="Instagram"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFBUlEQVR4nO3TeVAUZBjH8UXYUDA1Go9dGnAYNEQJjyaPPEpIzAPNTOKUQ9c7dawGz0EzUwFznECUuJkUUUlBRM4WRBEQIeNGBASWY9kFl+Vev40wU03NatP0p8/Mb955/3k/7/PM+woEr+r/ro8tVB/ZWKuTbKarW22su9r+nsUz1PJFc3qqZ3/YV2Btr0m0tteceWc18/81sMiyeeQyC9V1+4lPWTuuHcdRbbgOl7NeOBRXfTnOhm18PkbJJ+IOlk9SYTdNzcK5vcxarmG6vSbGfCn6L4XWvaEodhPK8dRrZIu4koiv60gNbyIzponMWBnSmGakF1qRRrUhDVGRcrqL4K2drDPvYOmUThbN7WXm8oErL0TcdZvtvEY9YuPbORxxzqa5ppOaIgWZoRVkhVRwO6SczJAKpKEVpIdXcSvqEUmRNVTd70RW1s++mUpWmXawxErN/Pl9Eq2QxDLr1pY5iRyanUBb9VOy/YoINgsk2vQEF02OEGPiwwWTb4k09SPQLIRT5pc4anmFL9+N5+egSmRV3Ww2bMHBSIHdVNUNrZC3dVyx3+RYMr0zaMuvIUPswe0JLuSIXMgVuZIndh1cn++zJjiTKvKiLCibmBUJHJ9ymZqHSiJ8yvAyqMXJUN6gFTo9KVR53XgPDedvIjsTT7F4PeVidx6Nc6NmvAdK7yjUNwvoTCqg+UA0D008uT9tK9K3PLhk4kNuUAnZkVVsmpOE19jS37RCicbbVbkiFxThqShPxtFq4ESnjgNdQkc00mI0uZX0Sc7SuyGIgbwqejNLqDb2pNjYfbDLKv8EHkaVcmTqVSRWUqVWqEDsoaga70ZPUDL9h2PpM7RH86Yd7PsBHpSCmQ2IbGCcLQNjV/Isv5LeHaE0jXSiQuxOo99V6sPSCDIL5pDFNbVWqG6MS/nzDjTnEnnmGwlT5sFiK8hLgyBvcDAbykoLmDcD9vryLPEO3cI1tAsdUfjF0RqeSprIk1OTIjq0Qio9h9KBMcsgMg6iA8DRFLyMoOg6/CSBnTqwTQibDMFtPJzbB9IMmGBL74jV9By+THtYKnkiV+KNd7ZrhfpHL2vEfAHcjIZrJ4YO3i+AlO3QlAsBenBKAEcF4C2EmjwI3w9Lp4LxYga+uUjP2eTBB5Qu2iTXCmkmflDBGnPIOA/JPuAvgB914Io+yH+B9jwolMA9CbTkQU067BaCqwhsp4FvJP2BSTSMdqFQ7K7QCrHEshVPI8j8HvKPQYwuZOjDHWPInw51vqBMhbYbULoTIoRwUgA7hoGTCYSF8ywgDtUwB4pFbtpHh6PpbXbpQLIXyHMgcxQULoSSNVDuARUSKHOD4lWQNxXSX4NQHTgsgC2GUF4Iu07SpfsZ9aOdS7VDG0fdZa8AwgxAXQay4KGDHx+CJ/5QfwbqjsOjr6BkLeROhkQhBOhA4gFoqIBZC+kzWEXrcKci7dBmgw2cEECsLhTZQm899DyBzoegLvkzHdkgT4CmMKg7CS050FICB9+HBdY8f7myEU5faIUGMX9B7eAt82dA5TZQpEB3NXTX/iWPQXUflCnQeB5yvOC74SB5HewsGTCy+/WFyCAUKTAkQe8xBe8NQQ2BII//Z2qPQakj3DWBS7pwTDD0v2ysHiNaYfBS6A/wnuUeij+tpvpgN7KoPmRRKmQRCpoiemkMGaBydz8PFneTZqQkYlgdPjpZeBm9eFyvSvAf6neEFyKKGwMKfwAAAABJRU5ErkJggg=="
              />
            </a>
            <a href="https://www.facebook.com/">
              <img
                alt="Facebook"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB80lEQVR4nO2Wv0scQRTHt/dHZ7TQ/BkhXrwZFIQ0ZmcCW6rRyiKIla3gj2usLOzUawy5hBRG39soUQ/FtOepaCGBoIJVuqTL3Y28vR+c3s7s7mWtki88WHZ3+Oyb933z1rL+q6KBoc+dTLjjXOI8k5imoGsucaxX7jyx4hKzt5Jc4D4XWOQSlW/QMwF7XLh9TYMSrzbauMSPWogWDhnuZFsjwV44m0+ZwLPIMFkNOE3a2z0RMoPT5mFYhZ4/e+m2BwKDtrH/tavWP31XN7e/1Z9CSZHSmUvfd5nA98EGCfjy1FJePZQOyL2aGozkuTEAuHd0WwNtfLlSM4s5NTp5oH2fSdjV9pnR+pXInf2sAcenDkO4FovcgS6/2o2ZFlIWlM2P61814HL6wrs3/FafIZeokmJrtLF+ElKmRVQnnaiuprVM4pwP0DuqmgJOTH8LapHVRqCAtTD9dVxXQ5NZ+P1Y8XEoLDwWkAmYbQTa8ObRgBJHGoA0YpjAQtxAJrDQ57gdvr3ojZj4gV99YeVedJ9zCaU4gUkbElpgGYofYgMKeGeEeUAn28oFnIS0u2kr84ODOy1WGNHw/BsoE5jn0u0OBavPlOZZNBiUaBtDZ+afLSRoxJhahp6RG5nY7LXiEvUSHQ50alR/E+maJoG2z6x/UXfbv1WXMl3cjAAAAABJRU5ErkJggg=="
              />
            </a>
            <a href="https://www.linkedin.com/company/proptimize-inc/about/">
              <img
                alt="Linkedin"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVR4nGNgGAXUAswdl1wZ2y+uZOy4sJs8fHEFc/slF/yWtJ13Y2q/8I+p4+J/inD7hX94LQO5hmJLOiAYZBY+i/bDFHJ0X/qfsePJf5/V98m1aD9RFmXtfPIfBP7++/9fcdp12lnks/o+2JLX337/F+q/QjuLmDou/leafp0sS5hIsSh+y6P/e+5/BmPNWTfAwQfjp+94/N95+d3/Cy69+7/kyrv/2TufgOOULIsaj7z4DwPmC2//151zE86/+Oo7OFiRwZY7H6lvEQjsvPfp/9obH/7/+Yew0WLhbepaBAo+mLraQ8/h4qnbH1PXor5Tr+AG2i65AxdvOPyCuhZ1n0BYBJKDAZCeUYv+0y3oXFfc/d95/BUYy0299l9y8lU433v1PbiBIDmYOEgPsRZRr5pov7gcp0WgyopqFV/nRWecFsEsA7mG7Kq8/eJy5vYLTngtGQUMJAAAJ50YlDWKhfkAAAAASUVORK5CYII="
              />
            </a>
          </div>
          <p>© 2024 Evntiq All rights reserved. </p>{" "}
        </div>

        <div className="Footer-note-terms">
          <button>Privacy policy</button>
          <button>Terms of service</button>
        </div>
      </div>
      {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default Footer;
