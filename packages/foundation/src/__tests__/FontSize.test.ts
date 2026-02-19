import FontSize from "../FontSize"

test("Snapshot of FontSizes", ()=> {
    expect(FontSize).toMatchSnapshot()
})