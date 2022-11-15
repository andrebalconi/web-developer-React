import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="How does the code work?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
    <Accordion title="Come and work on our team!">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
    <Accordion title="Continuous improvement!">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="How does the code work?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
    <Accordion title="Come and work on our team!">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
    <Accordion title="Continuous improvement!">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis
      autem reprehenderit necessitatibus laborum perspiciatis. Repellat mollitia
      minus, eum eos excepturi quos placeat culpa ea consequuntur facere vel.
      Consequatur, reiciendis.
    </Accordion>
  </AccordionGroup>
);
