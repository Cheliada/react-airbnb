import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Properties({ title, ...additional_properties }) {
  return (
    <Box shadow className="properties">
      <Heading border>{title}</Heading>
      <List {...additional_properties} />
    </Box>
  );
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkIn_instructions,
}) {
  return (
    <ul className="properties__list">
      <ListItem title="House rools">
        <span>{house_rules}</span>
      </ListItem>

      <ListItem title="Cancellation Policy">
        <span>{cancellation_policy}</span>
      </ListItem>

      <ListItem title="Local transportation">
        <span>{local_transportation}</span>
      </ListItem>

      <ListItem title="Host languages">
        <span>{host_languages.join(", ")}</span>
      </ListItem>

      <ListItem title="Special offers">
        <span>{special_offers}</span>
      </ListItem>

      <ListItem title="Check-in instructions">
        <span>{checkIn_instructions}</span>
      </ListItem>
    </ul>
  );
}