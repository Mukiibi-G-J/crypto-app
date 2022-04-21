import React from "react";
//! flatList is like map
//! add renders element when they are about to appear on the screen
//! add remove the off view

//! SaftArea help to render element on mobile screens

import { COLORS, NFTData } from "../constants";

import { View, SafeAreaView, FlatList, Text } from "react-native";
import { useState } from "react";
import { HomeHeader, NFTCard, FocusedStatusBar } from "../Components";

const Home = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {/* //* Status bar which is like a navbar */}
        <FocusedStatusBar background={COLORS.primary} />
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0 }}>
            <FlatList
              data={NFTData}
              renderItem={({ item }) => <NFTCard data={item} />}
              //! this mean the id should be unique
              keyExtractor={(item) => {
                item.id;
              }}
              //! this used to avoid the scroll bar
              showsVerticalScrollIndicator={true}
              //! gives you a header
              ListHeaderComponent={<HomeHeader />}
            />
          </View>

          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: -1,
            }}
          >
            <View style={{ height: 300, backgroundColor: COLORS.primary }} />

            <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
