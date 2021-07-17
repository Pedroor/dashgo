import React from "react";
import { Button, HStack, Stack, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCounterOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}
const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export function Pagination({
  totalCounterOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCounterOfRegisters / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {previousPage.length > 0 &&
          previousPage.map(page => {
            return <PaginationItem key={page} number={page} />;
          })}
        <PaginationItem number={currentPage} isCurrent />
        {nextPages.length > 0 &&
          nextPages.map(page => {
            return <PaginationItem key={page} number={page} />;
          })}
      </Stack>
    </Stack>
  );
}
