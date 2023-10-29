import React from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { FaCheckCircle, FaClock } from "react-icons/fa"; // Import different icons
import { RxLapTimer } from "react-icons/rx";
import "./DashView.css";
import Card from "../Card/Card";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          const title = elem[index]?.title;

          // Define icons for each title
          let titleIcon;
          switch (title) {
            case "Todo":
              titleIcon = <FaCheckCircle />;
              break;
            case "In progress":
              titleIcon = <RxLapTimer />;
              break;
            case "Backlog":
              titleIcon = <FaClock />;
              break;
            default:
          }

          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <div/>
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "15px", height: "15px", display: 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://uhs-group.com/wp-content/uploads/2020/08/person-dummy-e1553259379744.jpg"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {titleIcon} {/* Render the appropriate icon for the title */}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <div className="ltrSpacing" style={{ letterSpacing: "2px"}}>...</div>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
