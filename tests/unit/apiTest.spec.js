import { shallowMount } from "@vue/test-utils";
import axios from "axios";
import IntegrationTestComponent from "@/components/IntegrationTestComponent.vue";
jest.mock("axios");

describe("API Integration Test", () => {
  it("should make an API call and process the response", async () => {
    const mockResponse = { data: { results: ["result1", "result2"] } };
    axios.get.mockResolvedValue(mockResponse);

    const wrapper = shallowMount(IntegrationTestComponent);
    const query = "test-query";
    await wrapper.vm.fetchData(query);

    expect(wrapper.vm.results).toEqual(mockResponse.data.results);
  });
});
