import {
  Button,
  Flex,
  Container,
  SimpleGrid,
  Select,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorIndicator from "../component/ErrorIndicator";
import TicketCard from "../component/TicketCard";

export default function Tickets() {
  const Navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [err, setErr] = useState(false);
  const [sortOrderValue, setSortOrderValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  async function fetchAndUpdateData(sortOrderValue, filterValue) {
    setLoading(true);
    try {
      let queryParams = {};
      if (filterValue) {
        queryParams.status = filterValue;
      }

      if (sortOrderValue) {
        queryParams._sort = "priority";
        queryParams._order = sortOrderValue;
      }

      let resp = await axios({
        method: "get",
        url: "http://localhost:3000/tickets",
        params: queryParams,
      });

      setLoading(false);
      setTickets(resp?.data);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(sortOrderValue, filterValue);
  }, [sortOrderValue, filterValue]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (err) {
    return <ErrorIndicator />;
  }

  return (
    <Container maxW={"container.xl"}>
      <Flex direction={"row-reverse"}>
        <Button
          variant={"outline"}
          colorScheme="red"
          onClick={() => {
            Navigate("/tickets/create");
          }}
          margin={"3"}
        >
          Create Tickets
        </Button>
      </Flex>

      <HStack spacing={4} my={4}>
        <Select
          placeholder="Sort by Priority"
          value={sortOrderValue}
          onChange={(e) => {
            setSortOrderValue(e.target.value);
          }}
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
        <Select
          placeholder="Filter by Status"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="progress">Progress</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </Select>
      </HStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {tickets?.map((ticket) => (
          <TicketCard {...ticket} key={ticket.id} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
