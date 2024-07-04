
import IntegrationTestComponent from "@/components/IntegrationTestComponent.vue";
import { shallowMount } from "@vue/test-utils";

describe('Brower Cache Test (In-Memory Cache)', () => {
    it('should use cached data if available', async () => {
        const wrapper = shallowMount(IntegrationTestComponent);
        const query = 'test-query';
        const mockResults = ['cached-result1', 'cached-result2'];
        wrapper.vm.cache[query] = mockResults;
    
        await wrapper.vm.fetchData(query);
    
        expect(wrapper.vm.results).toEqual(mockResults);
      });
});