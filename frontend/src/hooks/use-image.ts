import { reactive } from "@vue/composition-api";
import { useGetImageQuery } from "@/models.generated";
import { useResult } from "@vue/apollo-composable";

export default function() {
    const queryVariables: { id: string } = reactive({ id: "" });
    const queryOptions: { enabled: boolean } = reactive({ enabled: false });
    const { result, loading } = useGetImageQuery(
        queryVariables,
        queryOptions
    );
    const image = useResult(result, null, data => data.image);

    function loadImage(seed: string) {
        queryVariables.id = seed;

        // to discuss
        // https://github.com/vuejs/vue-apollo/issues/909
        if (!queryOptions.enabled) {
            queryOptions.enabled = true;
        }
    }

    return { image, loading, loadImage };
}
