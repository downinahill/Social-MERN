import styled from 'styled-components'

 const Widget = () => {
    return (
        <WidgetWrapper>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdowninahill%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="340" 
            height="700" 
            style={{ border: "none", overflow: "hidden"}}
            scrolling="no" 
            frameBorder="0" 
            allowFullScreen="true" 
            allow="encrypted-media"
            title="Facebook Widget"

            >
            </iframe>
        </WidgetWrapper>
    )
}

const WidgetWrapper = styled.div`
    display: flex;
    align-items: end;
    justify-content: flex-end;
`
export default Widget
