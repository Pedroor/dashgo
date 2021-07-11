import { Button } from "@chakra-ui/react";

interface PaginationItenProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItenProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        colorScheme="pink"
        width="4"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      bgColor="gray.700"
      _hover={{ bg: "gray.500" }}
      width="4"
    >
      {number}
    </Button>
  );
}