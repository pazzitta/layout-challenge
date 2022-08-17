import '../../myHome/baseIllustrationStyles.css'

const BlackboardCalendar = () =>{
    return(
        <div className='blackboard-calendar-order'>
            <div></div>
            <div></div>
            <div>
                <div className='order-month-and-date'></div>
                <table>
                    <tr className='order-and-styles-row-one'>
                        <td>Sun.</td>
                        <td>Mon.</td>
                        <td>Tue.</td>
                        <td>Wed.</td>
                        <td>Thu.</td>
                        <td>Fri.</td>
                        <td>Sat.</td>
                    </tr>
                    <tr className='order-and-styles-row-two'>
                        <td>S--&gt; 10' A--&gt; 5' V--&gt; 5' E--&gt; 20' R--&gt; 20' S--&gt; 5'</td>
                        <td>S--&gt; 10' A--&gt; 5' V--&gt; 5' E--&gt; 20' R--&gt; 20' S--&gt; 5'</td>
                        <td>lla</td>
                        <td>kkd</td>
                        <td>S--&gt; 10' A--&gt; 5' V--&gt; 5' E--&gt; 20' R--&gt; 20' S--&gt; 5'</td>
                        <td>jkja</td>
                        <td>kka</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default BlackboardCalendar;