import Progress from "@react-ui/progress/Progress";
import React from "react";

export const ProgressExample = () => {
      const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

    return (
        <Progress.Root
            className="w-72 mx-auto bg-gray-100"
            data-orientation="vertical"
            value={progress}
            size="md"
            variant="soft"
        >
            <Progress.Indicator withHighlight innerShadow className="dark:shadow-white/35" intent="primary" loading="primary" complete="success" style={{ transform: `translateX(-${100 - progress}%)` }}/>
        </Progress.Root>
    )
}