function findGCD()
{
    let h = parseInt(document.getElementById("height").value);          
    let w = parseInt(document.getElementById("width").value);
    let gcd_result = document.querySelector(".result p b");
    if (h >= w)
    {
        let q = Math.floor(h / w);
        let r = h % w;
        let left_side = w * q + r;
        while (r != 0)
        {
            if (h === left_side && r != 0)
             {
                h = w;
                w = r;
                q = Math.floor(h / w);
                r = h % w;
                left_side = w * q + r;
             }
        }
        gcd_result.innerHTML = w;
    }

    else if (w > h)
    {
        let q = Math.floor(w / h);
        let r = w % h;
        let left_side = h * q + r;
        while (r != 0)
        {
            if (w === left_side && r != 0)
             {
                w = h;
                h = r;
                q = Math.floor(w / h);
                r = w % h;
                left_side = h * q + r;
             }
        }
        gcd_result.innerHTML = h;
    }
}