import React from "react";
import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { NotificationsNav } from "../Header/NotificationsNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

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
      {!isWildVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}
      <Logo />
      {isWildVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWildVersion} />
      </Flex>
    </Flex>
  );
}
