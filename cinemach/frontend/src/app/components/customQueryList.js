import { useEffect, useState } from "react";
import Link from "next/link";

import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import kpLogo from "../../assets/icon-kp.svg";
import imdbLogo from "../../assets/icon-imdb.svg";
import "../css/header.css";
import "react-tabs/style/react-tabs.css";

export default function CustomQueryList({ list, list2, type }) {
  return (
    <>
      <Grid className="queryList__container" item xs={11}>
        <Tabs>
          <TabList>
            <Tab style={{ marginRight: "20px" }}>Фильмы</Tab>
            <Tab>Личности</Tab>
          </TabList>
          <TabPanel>
            <List className="queryList__list">
              {list.length !== 0 &&
                list.map((result, index) => (
                  <>
                    <Link href={`/film/[id]`} as={`/film/${result.id}`}>
                      <ListItem className="queryList__item" key={result.id}>
                        <div className="queryList__item-container">
                          <img
                            className="queryList__item-poster"
                            style={{ width: "60px", height: "90px" }}
                            src={result.poster.url}
                          />
                          <div className="queryList__item-info">
                            <div className="queryList__item-info-name">
                              {result.name ? (
                                <>
                                  <h4>
                                    {result.name ?? result.alternativeName}
                                  </h4>
                                  <span
                                    style={{
                                      color: "rgba(255, 255, 255, 0.5)",
                                    }}
                                  >
                                    {result.alternativeName}
                                  </span>
                                </>
                              ) : (
                                <h4>{result.alternativeName}</h4>
                              )}
                            </div>
                            <div className="queryList__item-info-rating">
                              <span className="queryList__item-rating">
                                <img
                                  src={kpLogo.src}
                                  alt=""
                                  style={{ width: "20px" }}
                                />
                                {result.rating.kp.toFixed(1)}
                              </span>
                              {result?.rating?.imdb !== 0 && (
                                <span className="queryList__item-rating">
                                  <img
                                    src={imdbLogo.src}
                                    alt=""
                                    style={{ width: "20px" }}
                                  />
                                  {result.rating.imdb}
                                </span>
                              )}
                              <span>
                                {result.type === "movie"
                                  ? "фильм"
                                  : result.type === "cartoon"
                                  ? "мультфильм"
                                  : result.type === "anime"
                                  ? "аниме"
                                  : result.type === "tv-series"
                                  ? "сериал"
                                  : ""}
                              </span>
                              <span>{result.year}</span>
                            </div>
                          </div>
                        </div>
                      </ListItem>
                    </Link>

                    {list.length !== 0 && index !== list.length - 1 && (
                      <Divider
                        variant="middle"
                        component="li"
                        key={index}
                        sx={{
                          borderBottom: "1px solid rgba(108, 41, 163, 0.5)",
                        }}
                      />
                    )}
                  </>
                ))}
            </List>
          </TabPanel>
          <TabPanel>
            <List className="queryList__list">
              {list2.length !== 0 &&
                list2.map((result, index) => (
                  <>
                    <ListItem className="queryList__item" key={result.id}>
                      <Link href={`/name/[id]`} as={`/name/${result.id}`}>
                        <div className="queryList__item-container">
                          <img
                            className="queryList__item-poster"
                            style={{ width: "60px", height: "90px" }}
                            src={result.photo}
                          />
                          <div className="queryList__item-info">
                            <div className="queryList__item-info-name">
                              {result.name ? (
                                <>
                                  <h4>{result.name ?? result.enName}</h4>
                                  <span
                                    style={{
                                      color: "rgba(255, 255, 255, 0.5)",
                                    }}
                                  >
                                    {result.enName}
                                  </span>
                                </>
                              ) : (
                                <h4>{result.enName}</h4>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </ListItem>

                    {list.length !== 0 && index !== list.length - 1 && (
                      <Divider
                        variant="middle"
                        component="li"
                        sx={{
                          borderBottom: "1px solid rgba(108, 41, 163, 0.5)",
                        }}
                      />
                    )}
                  </>
                ))}
            </List>
          </TabPanel>
        </Tabs>
      </Grid>
    </>
  );
}
