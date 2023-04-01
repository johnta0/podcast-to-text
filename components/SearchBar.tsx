import { useState, FormEvent } from "react";
import { Flex, Input, InputGroup, InputLeftElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something with the search query, such as redirect to the results page
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
  };

  return (
    <Flex alignItems="center" justifyContent="center" my={4}>
      <form onSubmit={handleSearch}>
        <InputGroup size="lg">
          <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search podcasts and episodes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            focusBorderColor="blue.500"
            bg="gray.50"
            borderRadius="full"
            py={4}
            px={6}
            boxShadow="md"
            width="xl"
          />
          <IconButton
            aria-label="Search"
            type="submit"
            icon={<SearchIcon />}
            bg="blue.500"
            _hover={{ bg: "blue.600" }}
            color="white"
            borderRadius="full"
            ml={2}
            size="lg"
          />
        </InputGroup>
      </form>
    </Flex>
  );
};

export default SearchBar;
