class ElfDebugEnzyme {

    display(value) {
        console.log(value);
    }

    getLast(wrapper, element, showMe) {
        if (showMe) {
            const paragraphData = wrapper.find(element).last().debug();
            this.display(paragraphData);
        }
    }
}

export default new ElfDebugEnzyme();