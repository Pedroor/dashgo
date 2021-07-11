import React from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { NotificationsNav } from "../Header/NotificationsNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";

export function Header() {
  const isWildVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      {isWildVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWildVersion} />
      </Flex>
    </Flex>
  );
}
