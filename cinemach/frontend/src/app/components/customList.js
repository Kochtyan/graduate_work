import React from "react";
import { useEffect, useState } from "react";

import CustomButton from "@/app/components/customButton";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import "../css/film.css";

const styleList = {
  py: 0,
  width: "100%",
  maxWidth: 900,
  borderRadius: 2,
  borderColor: "divider",
  padding: "10px",
};

export default function CustomList({ list, type }) {
  const [displayedFacts, setDisplayedFacts] = useState(3);

  const [isFacts, setIsFacts] = useState(false);
  const [spoilerClicked, setSpoilerClicked] = useState(null);

  useEffect(() => {
    if (
      list?.length !== 0 &&
      list?.filter((fact) => fact.type === type).length !== 0 &&
      list !== undefined
    ) {
      setIsFacts(true);
      setSpoilerClicked(Array(list?.length).fill(false));
    } else {
      setIsFacts(false);
    }
  }, [list]);

  const handleShowMoreFacts = () => {
    setDisplayedFacts((prev) => prev + 10);
  };

  const handleShowLessFacts = () => {
    setDisplayedFacts((prev) => prev - 10);
  };

  const handleClickSpoiler = (index) => {
    const newSpoilerClicked = [...spoilerClicked];
    newSpoilerClicked[index] = true;
    setSpoilerClicked(newSpoilerClicked);
  };

  return (
    <>
      <Grid item xs={11} style={{ margin: "0 auto" }}>
        {isFacts && (
          <>
            <h3>
              {type === "FACT"
                ? "Факты"
                : type === "BLOOPER"
                ? "Ошибки в фильме"
                : ""}
            </h3>
            <List sx={styleList}>
              {list &&
                list
                  .filter((fact) => fact.type === type)
                  .slice(0, displayedFacts)
                  .map((fact, index) => (
                    <React.Fragment key={index}>
                      <ListItem className="movie__list-item">
                        <p
                          className={`${fact.spoiler ? "movie__spoiler" : ""} ${
                            spoilerClicked[index] ? "no-blur" : ""
                          }`}
                          dangerouslySetInnerHTML={{ __html: fact.value }}
                        ></p>
                        {fact.spoiler && (
                          <span
                            className="movie__spoiler-warning"
                            style={{
                              display: `${spoilerClicked[index] ? "none" : ""}`,
                            }}
                          >
                            <Chip
                              color="secondary"
                              label="Содержит спойлеры"
                              onClick={() => handleClickSpoiler(index)}
                            />
                          </span>
                        )}
                      </ListItem>
                      {list &&
                        index !==
                          list.filter((fact) => fact.type === type).length -
                            1 &&
                        index !== displayedFacts - 1 && (
                          <Divider
                            variant="middle"
                            component="li"
                            sx={{
                              borderBottom: "1px solid rgba(108, 41, 163, 0.5)",
                            }}
                          />
                        )}
                    </React.Fragment>
                  ))}
            </List>
            <div className="movie__buttons-row">
              {list &&
                displayedFacts <
                  list.filter((fact) => fact.type === type).length && (
                  <CustomButton
                    onClick={handleShowMoreFacts}
                    title="Показать еще"
                  />
                )}
              {displayedFacts > 3 && (
                <CustomButton
                  onClick={handleShowLessFacts}
                  title="Показать меньше"
                />
              )}
            </div>
          </>
        )}
      </Grid>
    </>
  );
}
