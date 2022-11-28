import React from "react";

import Callout, { CalloutBody, CallautActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import SpeedImage from "draws/Speed";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CallautActions, CalloutMedia },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Always investment in knowledge!</h6>
      <p>
        Repellat mollitia minus, eum eos excepturi quos placeat culpa ea
        consequuntur facere vel.
      </p>
      <CallautActions>
        <Button color="primary">Come in!</Button>
      </CallautActions>
    </CalloutBody>
    <CalloutMedia>
      <SpeedImage />
    </CalloutMedia>
  </Callout>
);
