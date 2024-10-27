import "../src/index.css";

// register msw addon
import { initialize, mswLoader } from "msw-storybook-addon";

// initialize msw
initialize();

//configures storybook to log the actions (onArchiveTask and onPinTask) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
