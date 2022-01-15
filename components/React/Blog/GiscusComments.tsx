import { Giscus, Mapping, Theme } from "@giscus/react";

import config from "config.json";

export default function GiscusComments() {
  if (config.giscus.show) {
    return (
      <Giscus
        repo={`${config.username}/${config.repoName}`}
        repoId={config.giscus.repoId}
        category={config.giscus.category}
        categoryId={config.giscus.categoryId}
        mapping={config.giscus.mapping as Mapping}
        reactionsEnabled="1"
        emitMetadata="0"
        theme={config.giscus.theme as Theme}
      />
    );
  }

  return <div></div>;
}
