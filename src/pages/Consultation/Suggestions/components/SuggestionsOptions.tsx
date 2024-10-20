import { IonCheckbox } from "@ionic/vue";

type props = {
  options: Record<string, any>;
};

export const SuggestionsOptions = ({ options }: props) => {
  const renderOptionsCheckboxes = (key: string, values: Array<string>) => (
    <div key={key} class={"pl-3"}>
      <p class="font-semibold">{key}</p>
      <div class="grid grid-cols-3 gap-2 mb-8">
        {values.map((value) => (
          <IonCheckbox
            label-placement="end"
            justify="start"
            color="dark"
            class="h-full"
            value={value}
          >
            {value}
          </IonCheckbox>
        ))}
      </div>
    </div>
  );

  const renderOptions = (options: Record<string, any>) => {
    return Object.keys(options).map((key) => {
      if (Array.isArray(options[key])) {
        return renderOptionsCheckboxes(key, options[key]);
      } else if (typeof options[key] === "object") {
        return (
          <div key={key} class={"pl-3"}>
            <p class="font-semibold">{key}</p>
            {renderOptions(options[key])}
          </div>
        );
      }
    });
  };

  return <div>{renderOptions(options)}</div>;
};
