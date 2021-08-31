import reactDom from "react-dom";

export default function newpost() {
    return (
        <div id="weavy-container" style="height:500px">
          
            var jwt = "{eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c}";
            var weavy = new Weavy({ jwt: jwt });
            var space = weavy.space({ key: "demo" });
            space.app({
                key: "posts-demo",
                type: "posts",
                container: "#weavy-container"
            });
       </div>
    );
  }